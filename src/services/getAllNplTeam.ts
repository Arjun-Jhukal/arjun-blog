export const getAllNplTeams = () => {
    return `
    query getAllNplTeams {
      allNplTeams {
            teamName
            teamOwner
            teamSlug
            teamLogo {
            url
            alt
            }
            numberOfTrophies
        }
    }
  `;
};
