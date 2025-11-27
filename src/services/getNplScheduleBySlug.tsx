export const getNplSeasonScheduleBySlug = () => {
    return `query getNplSeasonScheduleBySlug($slug:String) {
            nplSchedule(filter: {nplScheduleSlug: {eq: $slug}}) {
            id
            __typename
            nplScheduleSeo {
            description
            title
            twitterCard
            image {
                url
                alt
            }
            }
            scheduleTitle
            nplScheduleSlug
            nplScheduleContent {
            matchDayAndTime
            teamA {
                teamName
                teamLogo{
                url
                alt
                }
            }
            teamB {
                teamName
                teamLogo{
                url
                alt
                }
            }
            overbowledA
            overbowledB
            scoreA
            scoreB
            wicketDownA
            wicketDownB            
        }
        }
    }`
}