import { NplScheduleListParams } from "@/interface";
import { performRequest } from "@/services/baseQuery";
import { getAllNplSchedule } from "@/services/getAllNplSeason";
import Image from "next/image";
import Link from "next/link";

export default async function NplSeasonList() {
    const query = getAllNplSchedule();

    const data = await performRequest({
        query,
    }) as NplScheduleListParams;

    return (
        <section className="npl__season__listing my-8 lg:my-12">
            <div className="container">
                <div className="section__title mb-6 lg:mb-8 lg:max-w-[80%]">
                    <h2 >
                        Explore All Nepal Premier League Seasons – Fixtures, Results & Full Match Schedules
                    </h2>
                    <p className="mt-2">
                        Discover every season of the Nepal Premier League (NPL) with complete fixtures, match schedules, team lineups, venues,
                        and results. Browse season-wise details to stay updated with live scores, points tables, and match outcomes from
                        Nepal’s biggest cricket league.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {data?.allNplSchedules.map((schedule) => (
                        <Link
                            href={`npl/${schedule.nplScheduleSlug}`}
                            key={schedule.nplScheduleSlug}
                            className="group block"
                        >
                            <div className="
                                bg-white rounded-xl shadow-md overflow-hidden
                                border border-gray-200 
                                transition-all duration-300 
                                hover:shadow-xl hover:-translate-y-1 hover:border-blue-500
                                active:scale-95
                            ">
                                {/* IMAGE BLOCK */}
                                <div className="h-32 w-full overflow-hidden">
                                    <Image
                                        src={schedule.scheduleImage?.url || "/npl-placeholder.jpg"}
                                        alt={schedule.scheduleTitle}
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>

                                {/* TITLE */}
                                <div className="p-3 text-center">
                                    <h3 className=" font-semibold text-gray-800 group-hover:text-blue-600">
                                        {schedule.scheduleTitle}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
