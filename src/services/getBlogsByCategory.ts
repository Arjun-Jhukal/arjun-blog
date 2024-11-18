export const getAllBlogsByCategory = (categoryId: string) => {
	return `
    query getAllBlogsByCategory {
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
