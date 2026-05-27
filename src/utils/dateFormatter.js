export function formatDate(date, locale = "en-GB") {
    return new Date(date).toLocaleDateString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

export function formatDateTime(date, locale = "en-GB") {
    return new Date(date).toLocaleString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}