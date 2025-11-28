export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    const parts = formatter.formatToParts(date);

    const day = parts.find(p => p.type === "day")?.value;
    const month = parts.find(p => p.type === "month")?.value;
    const year = parts.find(p => p.type === "year")?.value;
    const hour = parts.find(p => p.type === "hour")?.value;
    const minute = parts.find(p => p.type === "minute")?.value;
    const dayPeriod = parts.find(p => p.type === "dayPeriod")?.value;

    return `${day} ${month} ${year}, ${hour}:${minute} ${dayPeriod}`;
};
