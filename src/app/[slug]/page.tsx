import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import "./detail.scss";
import { getBlogDetail } from "@/services/getBlogDetail";
import { performRequest } from "@/services/baseQuery";
import { BlogDetailContent, BlogDetailT } from "@/interface";
import LoadingDetailBlock from "@/components/Fallbacks/DetailFallback";
import { RenderComponent } from "@/utils/renderComponent/componentrenderer";

export default function DetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const QUERY: string = getBlogDetail();

  const BlogDetail = async () => {
    try {
      const result = (await performRequest({
        query: QUERY,
        options: {
          slug: slug,
        },
      })) as { post: BlogDetailContent };

      const postDetail = result.post;

      console.log({
        slug: slug,
        postDetail,
      });

      return (
        <section className="news__detail my-[80px] md:my-[120px] ">
          <div className="container">
            <div className="section-title lg:text-center max-w-[736px] mx-auto mb-4 md:mb-8">
              {postDetail.category.length > 0
                ? postDetail.category.map((cat) => (
                    <Link href={`/${cat.slug}`} className="category mb-2" key={cat.slug}>
                      {cat.name}
                    </Link>
                  ))
                : ""}
              <h1 className="mb-2 md:mb-3">{postDetail.title}</h1>
              <p className="text-ternary text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] "> - 2 Weeks ago</p>
            </div>

            <div className="featured__image relative aspect-blog-image mb-4 md:mb-8">
              <Image src={postDetail.featuredImage.url} alt={postDetail.featuredImage.alt} fill objectFit="cover" priority />
            </div>

            <div className="detail__content__box max-w-[540px] mx-auto">
              <div className="author-block flex justify-start items-center mb-3 gap-4">
                {postDetail.writtenBy.authorProfile ? (
                  <div className="author-profile relative w-[50px] h-[50px] rounded-[50%] overflow-hidden ">
                    <Image src={postDetail.writtenBy?.authorProfile?.url} alt={postDetail.writtenBy?.authorProfile?.alt} fill objectFit="cover" />
                  </div>
                ) : (
                  ""
                )}
                <div className="author-info">
                  <span className="text-[12px] leading-[16px] block text-ternary">Written by</span>
                  {postDetail.writtenBy.name ? (
                    <Link href={"#"} className="text-primary font-[900]">
                      {postDetail.writtenBy.name}
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {postDetail?.content?.map((section: BlogDetailT, index: number) => {
                return <React.Fragment key={section.__typename + index.toString()}>{RenderComponent(section)}</React.Fragment>;
              })}
            </div>
          </div>
        </section>
      );
    } catch (e) {
      console.log("Error Server Didn't respond", e);
    }
  };

  return (
    <>
      <Suspense fallback={<LoadingDetailBlock />}>
        <BlogDetail />
      </Suspense>
      <section className="related__blog mb-[80px] md:mb-[120px]">
        <div className="container">
          <div className="section-title mb-4 md:mb-8">
            <h2>Related Articles</h2>
          </div>
        </div>
      </section>
    </>
  );
}
