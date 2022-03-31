import * as React from 'react'
import {Card} from "./Card";
import generate from "shortid";

/**
 * Represents the most visited topics.
 * @param {string} title - name of block.
 * @param visited {Array<Object>} array of the most visited topics
 */
export const MostVisited = ({title, visited}) => {
    return (
        <Card title={title}>
            <ul>
                {visited.map(item => {
                    return <li key={generate()}><b>{item.title}</b> - <span>{item.description}</span></li>
                })}
            </ul>
        </Card>
    )
}
