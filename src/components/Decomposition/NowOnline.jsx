import * as React from 'react'
import {Card} from "./Card";

export const NowOnline = ({title, programmes}) => {
    return (
        <Card title={title}>
            {programmes.map(prog => {
                return <p><i>{prog.icon}</i> <span>{prog.name}</span> <span>{prog.channel}</span></p>
            })}
        </Card>
    )
}
