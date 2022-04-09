import {DateTime} from "./DateTime";

const withPrettyFormat = (Component) => {
    return function (props, ...args) {
        const date = new Date(props.date)
        const today = new Date()

        let result

        if (date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
            if (date.getHours() === today.getHours()) {
                result = today.getMinutes() - date.getMinutes() + " minutes ago"
            } else {
                result = today.getHours() - date.getHours() + " hours ago"
            }
        } else {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((today - date) / oneDay));
            result = diffDays + ' days ago'
        }

        return Component.apply(this, [{url: props.url, date: result}, ...args])
    }
}

export const DateTimePretty = withPrettyFormat(DateTime);
