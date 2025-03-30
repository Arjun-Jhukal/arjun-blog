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
            <div className="news__content absolute left-16 bottom-16 max-w-[auto]">
                {data.category.length > 0 ? (
                    <Link href={`${data.category[0].id}`} className="category">
                        {data.category[0].name}
                    </Link>
                ) : (
                    ""
                )}

                {data?.title ? (
                    <h1>
                        <Link href={`${data.category[0].slug}/${data.slug}`}>
                            {data.title}
                        </Link>
                    </h1>
                ) : (
                    ""
                )}

                {data?.brief ? <p>{data.brief}</p> : ""}
            </div>
        </div>
    )
}
