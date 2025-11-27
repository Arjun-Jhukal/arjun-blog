export const getPageBySlug = (slug: string) => `
  query getPageBySlug {
    page(filter: { slug: { eq: "${slug}" } }) {
      pageTitle
      seo {
        title
        description
        twitterCard
        image {
          alt
          url
        }
      }
      content {
        ... on AboutMissionRecord {
        __typename
          id
        }
        ... on AboutVisionRecord {
        __typename
          id
        }
        ... on CtaRecord {
        __typename
          id
        }
        ... on FaqRecord {
        __typename
          id
          faqTitle
          questionAnswer {
            question
            answer
          }
        }
        ... on MomentGalleryRecord {
        __typename
          id
          galleryImage {
            alt
            url
          }
        }
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
        ... on ToggleNplScheduleVisibiltiyOnPageRecord {
        __typename
          id
          showAllSchedule
        }
           ... on NplTeamVisibilityControllerRecord {
        __typename
        showTeamsAndOwners
        }
        ... on YoutubeIframeRecord {
        __typename
          id
          iframe
        }
      }
    }
  }
`;
