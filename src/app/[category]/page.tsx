import MultiplexAd from "@/components/ads/MultiplexAd";
import LoadingNewsBlock from "@/components/Fallbacks/NewsFallback";
import SingleNewsBlock from "@/components/News";
import { Blog, BlogDetailT } from "@/interface";
import { performRequest } from "@/services/baseQuery";
import { getAllBlogsByCategory } from "@/services/getBlogsByCategory"; // Updated query
import { RenderComponent } from "@/utils/renderComponent/componentrenderer";

import React, { Suspense } from "react";

export const revalidate = 60;

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
	const { category } = await params;
	const QUERY: string = getAllBlogsByCategory(category); // New combined query

	const BlogList = async () => {
		try {
			const data = await performRequest({
				query: QUERY,
			}) as { allPosts: Blog[]; category: any };

			const blogs = data?.allPosts || [];
			const categoryData = data?.category || null;

			return (
				<>
					{/* Render Dynamic Sections (categoryBlocks) */}
					{categoryData?.categoryBlocks?.map((section: BlogDetailT, index: number) => (
						<React.Fragment key={section.__typename + index.toString()}>
							{RenderComponent(section)}
						</React.Fragment>
					))}

					{/* Blog List */}
					<section className="blog__list my-[80px] md:my-[120px]">
						<div className="container">
							<div className="md:grid grid-cols-2 gap-x-8 gap-y-16">
								{blogs.length > 0 &&
									blogs.map((blog: Blog, index: number) => (
										<div
											className={`col-span-1 ${index < blogs.length - 1 ? "mb-6" : ""}`}
											key={index.toString()}>
											<SingleNewsBlock data={blog} />
										</div>
									))}
							</div>
						</div>
					</section>
				</>
			);
		} catch (e) {
			console.log(e);
			return <p>Error loading category page.</p>;
		}
	};

	return (
		<>
			<Suspense fallback={<LoadingNewsBlock />}>
				<BlogList />
			</Suspense>
			<MultiplexAd />
		</>
	);
}
