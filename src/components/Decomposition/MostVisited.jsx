import * as React from 'react'
import {Card} from "./Card";

export const MostVisited = ({title, visited}) => {
    return (
        <Card title={title}>
            {visited.map(item => {
                return <p><b>{item.title}</b> - <span>{item.description}</span></p>
            })}
        </Card>
    )
}
