import * as React from 'react'
import {Card} from "./Card";

/**
 * Represents map block.
 * @param {string} title - title of the block.
 * @param {string} link - link to the traffic schedule
 */
export const Map = ({title, link}) => {
    return (
        <Card title={title}>
            <a href={link}>Расписания</a>
        </Card>
    )
}
