export const getBlogDetail = () => {
  return `query getBlogDetail($slug:String) {
    post(filter: {slug: { eq: $slug }}) {
      brief
      category {
        id
        name
        slug
      }
        seo {
      description
      title
      twitterCard
      image {
        alt
        url
      }
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
        ... on QuoteRecord {
          __typename
          quoteBy
          quoteText
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
