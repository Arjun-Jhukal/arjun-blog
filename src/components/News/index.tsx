import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import "./news.scss";
import { Blog } from "@/interface";

export default function SingleNewsBlock({ data, key }: { data: Blog; key: string }) {
  return (
    <div className="news__item">
      <div className="news__image relative aspect-square  sm:aspect-blog-image">
        <Link href={`${data.slug}`} className="block">
          <Image src={data.featuredImage?.url} alt={data.featuredImage?.alt} layout="fill" objectFit="cover" />
        </Link>
      </div>
      <div className="news__content">
        {data.category.length > 0 ? (
          <Link href={`${data.category[0].slug}`} className="category">
            {data.category[0].name}
          </Link>
        ) : (
          ""
        )}

        <h2>
          <Link href={`${data.slug}`}>{data.title}</Link>
        </h2>
        <p className="author">
          by <span className="text-primary font-[700]">{data.writtenBy.name}</span>
        </p>
        <p>{data.brief}</p>

        <Link href={`${data.slug}`} className="read__more">
          + Read More
        </Link>
      </div>
    </div>
  );
}
