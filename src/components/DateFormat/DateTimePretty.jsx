import React from "react";
import {DateTime} from "./DateTime";
import {formatDate} from "../../utils/formatDate";

const withPrettyFormat = (Component) => {
    return (props) => {
        const result = formatDate(props.date)
        return <Component {...props} date={result}/>
    }
}

export const DateTimePretty = withPrettyFormat(DateTime);
