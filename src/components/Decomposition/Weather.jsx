import * as React from 'react'
import {Card} from "./Card";

export const Weather = ({title, ...props}) => {
    return (
        <Card title={"Погода"}>
            <div>{props.icon}</div>
            <div>{props.temp}</div>
            <div>
                <div>{props.morningTemp}</div>
                <div>{props.dayTemp}</div>
            </div>
        </Card>
    )
}
