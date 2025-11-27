import NplMatchCard from "@/components/organism/cards/NplMatchCard";
import { NplScheduleBySlug } from "@/interface";
import { performRequest } from "@/services/baseQuery";
import { getNplSeasonScheduleBySlug } from "@/services/getNplScheduleBySlug";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(
    { params }: { params: Promise<{ schedule: string }> }
): Promise<Metadata> {
    const { schedule } = await params;

    const query = getNplSeasonScheduleBySlug();

    const data = await performRequest({
        query,
        variables: { slug: schedule },
    }) as NplScheduleBySlug;

    const scheduleData = data.nplSchedule;

    if (!scheduleData) {
        return {
            title: "NPL Schedule Not Found",
            description: "The requested NPL season schedule does not exist."
        };
    }

    const seo = scheduleData.nplScheduleSeo;

    return {
        title: seo?.title || scheduleData.scheduleTitle,
        description: seo?.description || `View match schedule for ${scheduleData.scheduleTitle}.`,

        openGraph: {
            title: seo?.title,
            description: seo?.description,
            url: `https://your-domain.com/nepal-premier-league/${schedule}`,
            type: "article",
            images: [
                {
                    url: seo?.image?.url || "/default-og.jpg",
                    alt: seo?.image?.alt || seo?.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: seo?.title,
            description: seo?.description,
            images: [seo?.image?.url || "/default-og.jpg"],
        },
    };
}

export default async function NplSchedulePage({ params }: { params: Promise<{ schedule: string }> }) {
    const { schedule } = await params;


    const query = getNplSeasonScheduleBySlug();

    const data = await performRequest({
        query,
        variables: {
            slug: schedule,
        },
    }) as NplScheduleBySlug;

    const scheduleData = data.nplSchedule;

    return (
        <section className="schedule__root my-8 lg:my-12">
            <div className="container">
                <ul className="flex rounded-md p-1 gap-1 bg-gray-300 max-w-fit">
                    <li>
                        <button type="button" className="py-2 px-8 rounded-md bg-black text-white">Match Scheule</button>
                    </li>
                    <li>
                        <Link href="http://localhost:3000/nepal-premier-league/npl-2082-points-table" className="py-2 px-8 rounded-md">Points Table</Link>
                    </li>
                </ul>

                <h2 className="mt-6 text-xl font-semibold">{scheduleData.scheduleTitle}</h2>
                <div className="mt-6 space-y-4">
                    {scheduleData.nplScheduleContent.map((match, idx) => (
                        <NplMatchCard
                            key={idx}
                            matchDayAndTime={match.matchDayAndTime}
                            matchNumber={`${idx + 1}th Match`}
                            teamA={{
                                teamName: match.teamA.teamName,
                                teamLogo: match.teamA.teamLogo
                            }}
                            teamB={{
                                teamName: match.teamB.teamName,
                                teamLogo: match.teamB.teamLogo
                            }}
                            scoreA={match.scoreA}
                            scoreB={match.scoreB}
                            wicketDownA={match.wicketDownA}
                            wicketDownB={match.wicketDownB}
                            overbowledA={match.overbowledA}
                            overbowledB={match.overbowledB}
                            resultText="Sudur Paschim Royals won by 7 wickets (with 10 balls remaining)"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
