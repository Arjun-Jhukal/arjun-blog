export const getAllCategory = () => {
    return `
    query getAllCategory {
      allCategories {
      id
      name
      slug
      }
    }
  `;
};
