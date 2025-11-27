import NplTeamCard from "@/components/organism/cards/NplTeamCard";
import { NplTeamControllerProps } from "@/interface";
import { performRequest } from "@/services/baseQuery";
import { getAllNplTeams } from "@/services/getAllNplTeam";
export interface TeamProps {
    teamName: string;
    teamOwner: string;
    teamSlug: string;
    teamLogo: {
        url: string;
        alt: string;
    };
    numberOfTrophies: number
}

export default async function NplTeamList({ data }: { data: NplTeamControllerProps }) {
    const QUERY: string = getAllNplTeams();

    let teams: TeamProps[] = [];
    try {
        const result = (await performRequest({
            query: QUERY,
        })) as { allNplTeams: TeamProps[] };


        teams = result?.allNplTeams || [];
    }
    catch (e) {
        console.log("Error Server Didn't respond", e);
    }
    return (
        <section className="npl__team__listing my-[80px] md:my-[120px]">
            <div className="container">
                <div className="section__title mb-6 lg:mb-12  lg:max-w-[80%] ">
                    <h2>Nepal Premier League Teams, Owner and Wins</h2>
                    <p className='mt-4'>Get the full breakdown of the inaugural Nepal Premier League (NPL), including every team, their current owners, and a track record of their wins.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {teams.length && teams.map((team) => (
                        <div className="col-span-1" key={team.teamSlug}>
                            <NplTeamCard team={team} />
                        </div>

                    ))
                    }
                </div>
            </div>
        </section>
    )
}
