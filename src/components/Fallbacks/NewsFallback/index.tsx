import React from "react";

export default function LoadingNewsBlock() {
  return (
    <div className="news__item animate-pulse">
      <div className="news__image relative aspect-square md:aspect-blog-image bg-gray-300"></div>
      <div className="news__content">
        <div className="category bg-gray-300 h-5 w-32 mb-2"></div>
        <h2 className="bg-gray-300 h-6 w-full mb-3"></h2>
        <p className="author bg-gray-300 h-5 w-24 mb-3"></p>
        <p className="bg-gray-300 h-4 w-full mb-4"></p>
        <p className="bg-gray-300 h-4 w-4/5 mb-4"></p>
        <p className="bg-gray-300 h-4 w-3/4 mb-4"></p>

        <div className="read__more bg-gray-300 h-5 w-28 mt-4"></div>
      </div>
    </div>
  );
}
