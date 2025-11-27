export const getAllPages = () => {
    return `
    query getAllPages{
     allPages {
    pageTitle
    slug
    seo {
      title
      twitterCard
      description
      image {
        url
        alt
      }
    }
  }
    }
    `
}