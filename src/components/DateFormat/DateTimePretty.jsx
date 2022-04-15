import React from "react";
import {DateTime} from "./DateTime";
import {formatDate} from "../../utils/formatDate";

const withPrettyFormat = (Component) => {
        return class extends React.Component {
            render () {
                const result = formatDate(this.props.date)
                return <Component {...this.props} date={result}/>
            }
        }
}

export const DateTimePretty = withPrettyFormat(DateTime);
