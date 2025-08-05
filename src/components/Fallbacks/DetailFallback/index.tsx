import React from "react";

export default function LoadingDetailBlock() {
  return (
    <>
      <section className="news__detail news__detail__hightlihgt mt-16 md:mt-[120px]">
        <div className="container">
          <div className="section-title lg:text-center max-w-[736px] mx-auto mb-4 md:mb-8">
            <div className="category bg-gray-300 h-5 w-32 mb-2"></div>
            <h1 className="bg-gray-300 h-8 w-full mb-2 md:mb-3"></h1>
            <p className="bg-gray-300 h-4 w-40 text-ternary text-[12px] leading-[16px] md:text-[14px] md:leading-[18px] mb-3"></p>
          </div>
        </div>
      </section>
      <section className="news__detail__featured__image overflow-hidden">
        <div className="featured__image relative aspect-blog-image mb-4 md:mb-8 bg-gray-300"></div>
      </section>
      <section className="news__detail mb-[80px] mt-[40px] md:mb-[120px] ">
        <div className="container">
          <div className="detail__content__box max-w-[540px] mx-auto">
            <div className="author-block flex justify-start items-center mb-3 gap-4">
              <div className="author-profile relative w-[50px] h-[50px] rounded-[50%] overflow-hidden bg-gray-300"></div>
              <div className="author-info">
                <span className="bg-gray-300 h-4 w-24 block mb-1"></span>
                <div className="bg-gray-300 h-5 w-32"></div>
              </div>
            </div>

            <div className="detail-content">
              <p className="bg-gray-300 h-4 w-full mb-4"></p>
              <p className="bg-gray-300 h-4 w-4/5 mb-4"></p>
              <p className="bg-gray-300 h-4 w-3/4 mb-4"></p>
              <h2 className="bg-gray-300 h-6 w-full mb-3"></h2>
              <p className="bg-gray-300 h-4 w-full mb-4"></p>
            </div>

            <div className="image-block relative aspect-video mb-4 md:mb-8 bg-gray-300"></div>

            <div className="detail-content">
              <p className="bg-gray-300 h-4 w-full mb-4"></p>
              <h2 className="bg-gray-300 h-6 w-full mb-3"></h2>
              <p className="bg-gray-300 h-4 w-full mb-4"></p>
            </div>

            <div className="quote p-6 md:px-0 relative mb-4 bg-gray-300 h-32"></div>

            <div className="detail-content">
              <p className="bg-gray-300 h-4 w-full mb-4"></p>
              <ul>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
              </ul>
              <p className="bg-gray-300 h-4 w-full mb-4"></p>
              <ol>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
                <li className="bg-gray-300 h-4 w-1/2 mb-2"></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
