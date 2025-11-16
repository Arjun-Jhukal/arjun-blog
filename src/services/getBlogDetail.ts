export const getBlogDetail = () => {
  return `query getBlogDetail($slug:String) {
    post(filter: {slug: { eq: $slug }}) {
      brief
      category {
        id
        name
        slug
      }
      publishedAt
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
        ... on YoutubeIframeRecord {
            __typename
         
          iframe
        }
        ... on QuoteRecord {
          __typename
          quoteBy
          quoteText
        }
        ... on MomentGalleryRecord {
          __typename
          galleryImage {
            alt
            url
          }
        }
          ... on NplPointsTableRecord {
        __typename
        id
        nplPointsTableTitle
        nplPoints {
          matchDraw
          matchLost
          matchPlayed
          matchWon
          netRunRate
          totalPoints
          recentForm
          nplTeam {
            id
            teamName
            teamLogo {
              url
              alt
            }
          }
        }
      }
        ... on FaqRecord {
        __typename
        faqTitle
        questionAnswer {
          answer
          question
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
    relatedPost {
      featuredImage {
        url
        alt
      }
      title
      slug
      category {
        id
        name
        slug
      }
      brief
    }
    }
  }`;
};
