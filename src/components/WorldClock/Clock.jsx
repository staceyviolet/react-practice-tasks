import * as React from 'react'
import './clock.css'

export const Clock = ({clock, removeClock}) => {
    return (
        <div className={"clock"}>
            <div className={"clock__name"}>{clock.name}</div>
            <div className={"clock__delete"} onClick={() => removeClock(clock.id)}>x</div>
            <div className={"clock__face"}>
                <div className={"clock__hand hour"}></div>
                <div className={"clock__hand minute"}></div>
                <div className={"clock__hand second"}></div>
                {clock.timeZone}
            </div>
        </div>
    )
}
