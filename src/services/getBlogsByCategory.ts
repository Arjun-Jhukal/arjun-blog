export const getAllBlogsByCategory = (categoryId: string) => {
  return `
    query getAllBlogsByCategory {
    category(filter: { id: { eq: "${categoryId}" } }) {
        id
        name
        slug
        categoryBlocks {
          __typename
          ... on PageBannerRecord {
          __typename
            id
            pageBannerBrief
           
            pageBannerImage {
              video {
                thumbnailUrl
                mp4Url
              }
              alt
              url
            }
            pageBannerSubTitle
            pageBannerTitle
          }
           ... on ToggleQuestionVisibilityRecord {
            __typename
            showLicenseQuestion
            }
        }
      }
      allPosts(filter: { category: { eq: "${categoryId}" } }) {
        __typename
        title
        slug
        featuredImage {
          alt
          url
        }
        writtenBy {
          name
        }
        category {
          id
          name
          slug
        }
        brief
        
      }
    }
  `;
};
