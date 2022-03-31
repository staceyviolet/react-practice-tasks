import * as React from 'react'
import {Card} from "./Card";
import generate from "shortid";

/**
 * Represents TV shows schedule.
 * @param {string} title - title of the block.
 * @param {Array<Object>} shows - array of Show objects
 */
export const TvShows = ({title, shows}) => {
    return (
        <Card title={title}>
            <ul>
            {shows.map(show => {
                return (
                    <li key={generate()}>
                        <span>{show.time}</span><span>{show.name}</span><span>{show.channel}</span>
                    </li>)
            })}
            </ul>
        </Card>
    )
}
