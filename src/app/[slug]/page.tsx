import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import "./detail.scss";
// import SingleNewsBlock from "@/components/News";
import { getBlogDetil } from "@/services/getBlogDetail";
// import { notFound } from "next/navigation";
import { performRequest } from "@/services/baseQuery";
import { BlogDetailContent, BlogDetailT } from "@/interface";
import LoadingDetailBlock from "@/components/Fallbacks/DetailFallback";
// import SingleImage from "@/components/SingleImage";
import { RenderComponent } from "@/utils/renderComponent/componentrenderer";

export default function DetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  console.log(slug);
  const QUERY: string = getBlogDetil();

  const BlogDetail = async () => {
    try {
      const result = (await performRequest({
        query: QUERY,
        options: {
          slug: slug,
        },
      })) as { post: BlogDetailContent };

      const postDetail = result.post;

      return (
        <section className="news__detail my-[80px] md:my-[120px] ">
          <div className="container">
            <div className="section-title lg:text-center max-w-[736px] mx-auto mb-4 md:mb-8">
              <Link href={"#"} className="category mb-2">
                Motivation
              </Link>
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
                    <Image src={postDetail.writtenBy?.authorProfile?.url} alt="" fill objectFit="cover" />
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

              <div className="quote p-6 md:px-0 relative mb-4">
                <h3 className="mb-4 md:mb-8">
                  You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like
                  it’s heaven on earth.
                </h3>
                <em>Arjun Jhukal</em>
              </div>
              <div className="detail-content">
                <p>
                  Dramatically monetize bleeding-edge architectures with user friendly content. Distinctively aggregate timely convergence after
                  holistic opportunities. Enthusiastically disseminate exceptional e-tailers for strategic supply chains. Rapidiously re-engineer cost
                  effective metrics whereas frictionless technologies. Continually disseminate functional customer.
                </p>

                <ul>
                  <li>One for the money</li>
                  <li>Two for the show</li>
                  <li>Three to get ready</li>
                  <li>Now go, cat, go</li>
                </ul>
                <p>
                  Dramatically monetize bleeding-edge architectures with user friendly content. Distinctively aggregate timely convergence after
                  holistic opportunities. Enthusiastically disseminate exceptional e-tailers for strategic supply chains. Rapidiously re-engineer cost
                  effective metrics whereas frictionless technologies. Continually disseminate functional customer.
                </p>

                <ol>
                  <li>One for the money</li>
                  <li>Two for the show</li>
                  <li>Three to get ready</li>
                  <li>Now go, cat, go</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      );
    } catch (e) {
      console.log("Error Server Didn't respond");
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

          {/* <div className="lg:grid grid-cols-2 gap-6">
            {Array.from({
              length: 2,
            }).map((item, index) => (
              <SingleNewsBlock key={index.toString()} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
