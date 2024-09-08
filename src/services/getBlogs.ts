export const getAllBlogs = () => {
  return `
      query getAllBlogs {
        allPosts {
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
            name
            slug
          }
          brief
        }
      }
    `;
};
