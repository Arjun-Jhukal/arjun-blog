import { NPLPointsTableProps } from "@/interface";
import "./scoreboard.scss";
export default function NplPointsTable({ data }: { data: NPLPointsTableProps }) {
    const sortedTeams = [...data.nplPoints].sort((a, b) => {
        if (b.totalPoints === a.totalPoints) {
            return b.netRunRate - a.netRunRate; // secondary sorting
        }
        return b.totalPoints - a.totalPoints;
    });
    return (
        <div className="npl__points__table">
            <h2 className="mb-8">NPL 2082 Scorebard</h2>
            <div className="table__wrapper">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-start bg-primary text-white font-[600]">POS</th>
                            <th className="text-start bg-primary text-white font-[600]">Team</th>
                            <th className="text-start bg-primary text-white font-[600]">P</th>
                            <th className="text-start bg-primary text-white font-[600]">W</th>
                            <th className="text-start bg-primary text-white font-[600]">L</th>
                            <th className="text-start bg-primary text-white font-[600]">D</th>
                            <th className="text-start bg-primary text-white font-[600]">NRR</th>
                            <th className="text-start bg-primary text-white font-[600]">PTS</th>
                            <th className="text-start bg-primary text-white font-[600]">Recent Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.nplPoints.map((team, index) => (
                            <tr
                                key={team.nplTeam.teamName}
                                className={`border-b border-gray-200 hover:bg-blue-100 transition-colors ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <img src={team.nplTeam.teamLogo.url} alt={team.nplTeam.teamLogo.url || team?.nplTeam.teamName} className="w-6 h-6 rounded-full object-cover" />
                                        <strong className="text-lg">{team?.nplTeam.teamName}</strong>
                                    </div>
                                </td>
                                <td>{team.matchPlayed}</td>
                                <td>{team.matchWon}</td>
                                <td>{team.matchLost}</td>
                                <td>{team.matchDraw ?? 0}</td>
                                <td>{team.netRunRate}</td>
                                <td>{team.totalPoints}</td>

                                <td>
                                    <div className="flex flex-nowrap gap-1">
                                        {team.recentForm.split("").map((r, i) => (
                                            <span
                                                key={i}
                                                className={`uppercase text-[10px] w-6 h-6 rounded-full flex justify-center items-center game__status ${r.toLowerCase() === "w"
                                                    ? "won"
                                                    : r.toLowerCase() === "l"
                                                        ? "lost"
                                                        : "draw"
                                                    }`}
                                            >
                                                {r}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
