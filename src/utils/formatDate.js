export const formatDate = (dateTime) => {
    const date = new Date(dateTime)
    const today = new Date()

    let result

    if (date.toDateString() === today.toDateString()) {
        if (date.getHours() === today.getHours()) {
            result = today.getMinutes() - date.getMinutes() + " мин."
        } else {
            result = today.getHours() - date.getHours() + " ч."
        }
    } else {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((new Date() - date) / oneDay));
        result = diffDays + ' д.'
    }

    return result.toString()
}
