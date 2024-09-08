export const getBlogDetil = () => {
  return `query getBlogDetail{
     post(filter: {slug: {eq: "the-ultimate-frontend-developer-roadmap-for-2024"}}) {
    brief
    category {
      id
      name
      slug
    }
    content {
     ... on BlogContentRecord {
        __typename
        blogContent
      }
      ... on SingleImageBlockRecord {
        __typename
        image {
          alt
          url
        }
      }
    }
    featuredImage {
      url
      alt
    }
    publishedAt
    seo {
      description
      image {
        alt
        url
      }
      title
      twitterCard
    }
    title
    writtenBy {
      name
      authorMessage
      authorDesignation
      authorProfile {
        url
        alt
      }
    }
  }
    }`;
};
