"use client";

interface AddToCalendarProps {
    teamA: string;
    teamB: string;
    dateTime: string; // ISO date string
}

export default function AddToCalendar({ teamA, teamB, dateTime }: AddToCalendarProps) {
    const title = `${teamA} vs ${teamB} - NPL Match`;

    // Convert to Google Calendar format: YYYYMMDDTHHMMSSZ
    const start = new Date(dateTime);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // 2 hour match duration

    const formatForCalendar = (date: Date) =>
        date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

    const startTime = formatForCalendar(start);
    const endTime = formatForCalendar(end);

    const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
        title
    )}&dates=${startTime}/${endTime}&details=${encodeURIComponent(
        "NPL Match Reminder"
    )}&location=${encodeURIComponent("Kirtipur, Nepal")}`;

    return (
        <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all"
        >
            Add to Calendar
        </a>
    );
}
