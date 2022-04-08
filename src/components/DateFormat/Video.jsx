import React from "react";
import {DateTimePretty} from "./DateTimePretty";


export function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>

            <DateTimePretty date={props.date} />
        </div>
    )
}
