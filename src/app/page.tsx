import { Suspense } from "react";
import SingleNewsBlock from "@/components/News";
import { performRequest } from "@/services/baseQuery";
import { getAllBlogs } from "@/services/getBlogs";
import { Blog } from "@/interface";
import LoadingNewsBlock from "@/components/Fallbacks/NewsFallback";
import FeaturedNews from "@/components/News/FeaturedNews";

export const revalidate = 30;

export default function Home() {
	const QUERY: string = getAllBlogs(25);

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
					<div className="lg:grid grid-cols-2 gap-x-8 gap-y-16">
						{blogs.length > 0 &&
							blogs.map((blog: any, index: number) => (
								index === 0 ? <FeaturedNews key={index.toString()} data={blog} /> :
									<SingleNewsBlock key={index.toString()} data={blog} />
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
