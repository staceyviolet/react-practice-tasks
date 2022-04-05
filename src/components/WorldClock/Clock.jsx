import * as React from 'react'
import {useEffect, useState} from "react";

import './clock.css'

export const Clock = ({clock, removeClock}) => {
    const [time, setTime] = useState(new Date())
    const [loading, setLoading] = useState(true)

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }

    const hours = formatTime(time.getHours())
    const minutes = formatTime(time.getMinutes())
    const seconds = formatTime(time.getSeconds())

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    useEffect(() => {
        const handleDate = () => {
            setLoading(false)
            const date = new Date();
            date.setHours(date.getHours() + clock.timezone)
            setTime(date)
        }

        const interval = setInterval(handleDate, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [clock])

    return (
        <div className={"clock"}>
            <div className={"clock__name"}>{clock.name}</div>
            <div className={"clock__delete"} onClick={() => removeClock(clock.id)}>x</div>
            <div className={"clock__face"}>

                {loading ? <p className={"clock__loading"}>Loading...</p>
                    : <div>
                        <div className={"clock__hand hour"} style={hoursStyle}/>
                        <div className={"clock__hand minute"} style={minutesStyle}/>
                        <div className={"clock__hand second"} style={secondsStyle}/>
                    </div>
                }
            </div>
        </div>
    )
}
