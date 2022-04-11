import {DateTime} from "./DateTime";
import {formatDate} from "../../utils/formatDate";

const withPrettyFormat = (Component) => {
    return function (props, ...args) {
        const result = formatDate(props.date)

        return Component.apply(this, [{url: props.url, date: result}, ...args])
    }
}

export const DateTimePretty = withPrettyFormat(DateTime);
