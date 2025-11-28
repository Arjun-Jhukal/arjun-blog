import AddToCalendar from "@/components/molecules/AddToCalendar";
import { NplScheduleContentItem } from "@/interface";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";

interface MatchCardProps extends NplScheduleContentItem {
    matchDayAndTime: string;
    venue?: string;
    matchNumber?: string;
    resultText?: string;
}

// Check if match has already occurred
const hasMatchPassed = (dateString: string): boolean => {
    if (!dateString) return false;
    return new Date(dateString) < new Date();
};

// Determine winner/loser
const getMatchResult = (scoreA: number | null, scoreB: number | null) => {
    if (scoreA === null || scoreB === null) return { winner: null, loser: null };

    if (scoreA > scoreB) return { winner: 'A', loser: 'B' };
    if (scoreB > scoreA) return { winner: 'B', loser: 'A' };
    return { winner: null, loser: null };
};

// Calculate victory margin
const calculateVictoryMargin = (
    winner: string | null,
    scoreA: number | null,
    scoreB: number | null,
    wicketDownA: number | null,
    wicketDownB: number | null,
    overbowledA: number | null,
    overbowledB: number | null,
    teamAName: string,
    teamBName: string
): string => {
    if (!winner || scoreA === null || scoreB === null) return '';

    if (winner === 'A') {
        const wicketsRemaining = 10 - (wicketDownA || 0);
        const ballsRemaining = overbowledA ? calculateBallsRemaining(overbowledA) : 0;
        return `${teamAName} won by ${wicketsRemaining} wickets${ballsRemaining > 0 ? ` (${ballsRemaining} balls remaining)` : ''}`;
    } else {
        const runMargin = scoreB - scoreA;
        return `${teamBName} won by ${runMargin} runs`;
    }
};

const calculateBallsRemaining = (overs: number): number => {
    if (!overs) return 0;
    const totalOvers = 20;
    const oversInt = Math.floor(overs);
    const balls = Math.round((overs - oversInt) * 10);
    const totalBalls = totalOvers * 6;
    const ballsUsed = (oversInt * 6) + balls;
    return totalBalls - ballsUsed;
};

// Get status color and text
const getMatchStatus = (
    hasFullResult: boolean,
    matchPassed: boolean,
    hasPartialResult: boolean
) => {
    if (hasFullResult) {
        return {
            text: 'MATCH COMPLETED',
            color: 'bg-green-100 text-green-800 border-green-200',
            dot: 'bg-green-500'
        };
    }

    // Match time passed or has partial data → ongoing
    if (matchPassed || hasPartialResult) {
        return {
            text: 'ONGOING MATCH',
            color: 'bg-orange-100 text-orange-800 border-orange-200',
            dot: 'bg-orange-500'
        };
    }

    return {
        text: 'UPCOMING MATCH',
        color: 'bg-blue-100 text-blue-800 border-blue-200',
        dot: 'bg-blue-500'
    };
};


export default function NplMatchCard({
    matchDayAndTime,
    venue = "Kirtipur, Nepal Premier League",
    matchNumber = "",
    teamA,
    teamB,
    overbowledA,
    overbowledB,
    scoreA,
    scoreB,
    wicketDownA,
    wicketDownB,
}: MatchCardProps) {
    const matchPassed = hasMatchPassed(matchDayAndTime);

    // Check if we have any score data
    const hasTeamAScore = scoreA !== null;
    const hasTeamBScore = scoreB !== null;
    const hasPartialResult = hasTeamAScore || hasTeamBScore;
    const hasFullResult = hasTeamAScore && hasTeamBScore;

    const { winner, loser } = getMatchResult(scoreA, scoreB);
    const matchStatus = getMatchStatus(hasFullResult, matchPassed, hasPartialResult);

    const victoryText = winner && hasFullResult
        ? calculateVictoryMargin(winner, scoreA, scoreB, wicketDownA, wicketDownB, overbowledA, overbowledB, teamA.teamName, teamB.teamName)
        : '';

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300 group">
            {/* HEADER — Match Status & Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${matchStatus.dot}`}></div>
                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${matchStatus.color}`}>
                            {matchStatus.text}
                        </span>
                    </div>
                    {matchNumber && (
                        <span className="text-sm text-gray-500 font-medium">#{matchNumber}</span>
                    )}
                </div>

                {/* Calendar Button - only show if match hasn't passed */}
                {!matchPassed && !hasPartialResult && (
                    <AddToCalendar
                        teamA={teamA.teamName}
                        teamB={teamB.teamName}
                        dateTime={matchDayAndTime}
                    />
                )}
            </div>

            {/* DATE & VENUE */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                    <p className="font-bold text-gray-900 text-lg">{formatDate(matchDayAndTime)}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{venue}</span>
                </div>
            </div>

            {/* TEAMS & SCORE SECTION */}
            <div className="space-y-4">
                {/* Team A */}
                <div className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${winner === 'A' ? 'bg-green-50 border border-green-200' :
                    loser === 'A' ? 'bg-gray-50 border border-gray-200 opacity-60' :
                        hasTeamAScore ? 'bg-blue-50 border border-blue-200' :
                            'bg-gray-50 border border-gray-100'
                    }`}>
                    <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center p-1 ${winner === 'A' ? 'ring-2 ring-green-500' :
                            hasTeamAScore ? 'ring-2 ring-blue-500' :
                                'ring-1 ring-gray-200'
                            }`}>
                            {teamA.teamLogo.url && (
                                <Image
                                    src={teamA.teamLogo.url}
                                    width={40}
                                    height={40}
                                    alt={teamA.teamName}
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                        <div>
                            <span className={`font-bold text-base ${winner === 'A' ? 'text-green-900' :
                                hasTeamAScore ? 'text-blue-900' :
                                    'text-gray-900'
                                }`}>
                                {teamA.teamName}
                            </span>
                            {hasTeamAScore && overbowledA && (
                                <p className="text-sm text-gray-500 mt-1">({overbowledA} overs)</p>
                            )}
                        </div>
                    </div>

                    {hasTeamAScore ? (
                        <div className="text-right">
                            <p className={`text-2xl font-bold ${winner === 'A' ? 'text-green-900' :
                                'text-blue-900'
                                }`}>
                                {scoreA}<span className="text-gray-500 text-lg">/{wicketDownA ?? '0'}</span>
                            </p>
                        </div>
                    ) : (
                        <div className={`px-3 py-1 rounded-full ${matchPassed || hasPartialResult ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-700'
                            } text-sm font-medium`}>
                            {matchPassed || hasPartialResult ? 'Yet to bat' : 'To bat'}
                        </div>
                    )}
                </div>

                {/* VS Separator or Target */}
                {!hasFullResult && (
                    <div className="flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative bg-white px-4">
                            {hasPartialResult ? (
                                <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                                    In Progress
                                </span>
                            ) : (
                                <span className="text-sm font-bold text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200">
                                    VS
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Team B */}
                <div className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${winner === 'B' ? 'bg-green-50 border border-green-200' :
                    loser === 'B' ? 'bg-gray-50 border border-gray-200 opacity-60' :
                        hasTeamBScore ? 'bg-blue-50 border border-blue-200' :
                            'bg-gray-50 border border-gray-100'
                    }`}>
                    <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center p-1 ${winner === 'B' ? 'ring-2 ring-green-500' :
                            hasTeamBScore ? 'ring-2 ring-blue-500' :
                                'ring-1 ring-gray-200'
                            }`}>
                            {teamB.teamLogo.url && (
                                <Image
                                    src={teamB.teamLogo.url}
                                    width={40}
                                    height={40}
                                    alt={teamB.teamName}
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                        <div>
                            <span className={`font-bold text-base ${winner === 'B' ? 'text-green-900' :
                                hasTeamBScore ? 'text-blue-900' :
                                    'text-gray-900'
                                }`}>
                                {teamB.teamName}
                            </span>
                            {hasTeamBScore && overbowledB && (
                                <p className="text-sm text-gray-500 mt-1">({overbowledB} overs)</p>
                            )}
                        </div>
                    </div>

                    {hasTeamBScore ? (
                        <div className="text-right">
                            <p className={`text-2xl font-bold ${winner === 'B' ? 'text-green-900' :
                                'text-blue-900'
                                }`}>
                                {scoreB}<span className="text-gray-500 text-lg">/{wicketDownB ?? '0'}</span>
                            </p>
                        </div>
                    ) : (
                        <div className={`px-3 py-1 rounded-full ${matchPassed || hasPartialResult ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-700'
                            } text-sm font-medium`}>
                            {matchPassed || hasPartialResult ? 'Yet to bat' : 'To bat'}
                        </div>
                    )}
                </div>

                {/* Target Info - Show when only Team A has batted */}
                {hasTeamAScore && !hasTeamBScore && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <p className="text-orange-800 font-semibold text-sm">
                                {teamB.teamName} needs {(scoreA || 0) + 1} runs to win
                            </p>
                        </div>
                    </div>
                )}

                {/* Victory Text */}
                {victoryText && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-green-800 font-semibold text-sm">{victoryText}</p>
                        </div>
                    </div>
                )}

                {/* Match Ended without result */}
                {matchPassed && !hasPartialResult && (
                    <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                        <p className="text-gray-600 font-medium text-sm">Match ended - No result available</p>
                    </div>
                )}
            </div>
        </div>
    );
}