export const getAllNplSeasons = () => {
    return `
    query getAllNplSeasons {
    allNplSeasons {
        __typename
        seasonName
        seasonSlug
        }
    }
  `;
};
export const getAllNplSchedule = () => {
    return `
    query getAllNplSchedule {
    allNplSchedules {
        __typename
        nplScheduleSlug
        scheduleTitle
        scheduleImage{
        alt
        url
        }
        }
    }
  `;
};
