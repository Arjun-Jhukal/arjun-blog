export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const monthsShort = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const day = date.getDate();
    const month = monthsShort[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // convert to 12-hour format

    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};
