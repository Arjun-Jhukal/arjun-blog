import { Blog } from '@/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FeaturedNews({ data }: { data: Blog }) {
    return (
        <div className="news__item featured__news col-span-2 relative ">
            {data?.featuredImage?.url ? (
                <div className="news__image relative aspect-square  sm:aspect-blog-image">
                    <Link
                        href={`${data.category[0].slug}/${data.slug}`}
                        className="block">
                        <Image
                            src={data.featuredImage?.url}
                            alt={data.featuredImage?.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Link>
                </div>
            ) : (
                ""
            )}
            <div className="news__content">
                {data.category.length > 0 ? (
                    <Link href={`${data.category[0].id}`} className="category">
                        {data.category[0].name}
                    </Link>
                ) : (
                    ""
                )}

                {data?.title ? (
                    <h2>
                        <Link href={`${data.category[0].slug}/${data.slug}`}>
                            {data.title}
                        </Link>
                    </h2>
                ) : (
                    ""
                )}
                {data?.writtenBy?.name ? (
                    <p className="author">
                        by{" "}
                        <span className="text-primary font-[700]">
                            {data.writtenBy.name}
                        </span> | <span>
                            {data?.publishedAt
                                ? new Date(data.publishedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                })
                                : ""}
                        </span>
                    </p>
                ) : (
                    ""
                )}
                {data?.brief ? <p>{data.brief}</p> : ""}
                <Link
                    href={`${data.category[0].slug}/${data.slug}`}
                    className="read__more">
                    + Read More
                </Link>
            </div>
        </div>
    )
}
