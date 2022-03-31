import * as React from 'react'
import {Card} from "./Card";
import generate from "shortid";

/**
 * Represents TV shows schedule.
 * @param {string} title - title of the block.
 * @param {Array<Object>} programmes - array of Programme objects
 */
export const NowOnline = ({title, programmes}) => {
    return (
        <Card title={title}>
            <ul>
                {programmes.map(prog => {
                    return <li key={generate()}><img src={prog.icon} alt={'icon'}/> <span>{prog.name}</span>
                        <span>{prog.channel}</span></li>
                })}
            </ul>
        </Card>
    )
}
