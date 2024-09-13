export const getAllBlogs = (total: number) => {
  return `
      query getAllBlogs{
        allPosts(first:${total}) {
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
