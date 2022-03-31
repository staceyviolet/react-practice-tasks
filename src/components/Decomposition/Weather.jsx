import * as React from 'react'
import {Card} from "./Card";

/**
 * Represents weather info.
 * @param {string} title - title of weather block.
 * @param props
 */
export const Weather = ({title, ...props}) => {
    return (
        <Card title={"Погода"}>
            <div>{props.icon}</div>
            <div>{props.currentTemp}</div>
            <div>
                <div>Утром {props.morningTemp}</div>
                <div>Днем {props.dayTemp}</div>
            </div>
        </Card>
    )
}
