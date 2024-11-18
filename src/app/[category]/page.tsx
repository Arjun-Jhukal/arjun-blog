import LoadingNewsBlock from "@/components/Fallbacks/NewsFallback";
import SingleNewsBlock from "@/components/News";
import { Blog } from "@/interface";
import { performRequest } from "@/services/baseQuery";
import { getAllBlogs } from "@/services/getBlogs";
import { getAllBlogsByCategory } from "@/services/getBlogsByCategory";
import React, { Suspense } from "react";

export default function CategoryPage({
	params,
}: {
	params: { category: string };
}) {
	const QUERY: string = getAllBlogsByCategory(params.category);

	const BlogList = async () => {
		try {
			const data = (await performRequest({
				query: QUERY,
				variables: { slug: "/" },
			})) as {
				allPosts: Blog[];
			};

			const blogs = data?.allPosts || [];

			return (
				<>
					<div className="md:grid grid-cols-2 gap-x-8 gap-y-16">
						{blogs.length > 0 &&
							blogs.map((blog: any, index: number) => (
								<div className="col-span-1" key={index.toString()}>
									<SingleNewsBlock data={blog} />
								</div>
							))}
					</div>
				</>
			);
		} catch (e) {
			console.log(e);
			return <p>Error loading blogs.</p>;
		}
	};
	return (
		<section className="blog__list my-[80px] md:my-[120px]">
			<div className="container">
				<Suspense fallback={<LoadingNewsBlock />}>
					<BlogList />
				</Suspense>
			</div>
		</section>
	);
}
