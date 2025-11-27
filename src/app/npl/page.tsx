import { PageResponse } from "@/interface";
import { performRequest } from "@/services/baseQuery";
import { getPageBySlug } from "@/services/getPageBySlug";
import { RenderComponent } from "@/utils/renderComponent/componentrenderer";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch the blog post detail
    const QUERY = getPageBySlug("npl");
    const result = (await performRequest({
        query: QUERY,
        variables: {
            slug: slug,
        },
    })) as PageResponse;
    const pageDetail = result.page;

    // Extract relevant metadata fields
    const metadata = {
        title: pageDetail?.seo?.title,
        description: pageDetail?.seo?.description,
        openGraph: {
            title: pageDetail?.seo?.title,
            description: pageDetail?.seo?.description,
            images: [
                {
                    url: pageDetail?.seo?.image?.url,
                    alt: pageDetail?.seo?.image?.alt,
                },
            ],
        },
        twitter: {
            card: pageDetail?.seo?.twitterCard,
            title: pageDetail?.seo?.title,
            description: pageDetail?.seo?.description,
            images: [
                {
                    url: pageDetail?.seo?.image?.url,
                    alt: pageDetail?.seo?.image?.alt,
                },
            ],
        },
    };

    return metadata;
}

export default async function SinglePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const query = getPageBySlug("npl");

    const data = await performRequest({
        query,
    }) as PageResponse;

    return (
        <>
            {data?.page?.content?.map((section, index) => (
                <React.Fragment key={section.__typename + index}>
                    {RenderComponent(section)}
                </React.Fragment>
            ))}
        </>
    );
}
