import * as React from 'react'
import {Card} from "./Card";

export const TvShows = ({title, shows}) => {
    return (
        <Card title={title}>
            {shows.map(show => {
                return (
                    <p>
                        <span>{show.time}</span><span>{show.name}</span><span>{show.channel}</span>
                    </p>)
            })}
        </Card>
    )
}
