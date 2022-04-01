import * as React from 'react'
import {AddClockForm} from "./AddClockForm";
import {useState} from "react";
import {generate} from "shortid";
import {Clock} from "./Clock";
import './worldClock.css'

export const WorldClock = ({}) => {
    const [name, setName] = useState('')
    const [timezone, setTimezone] = useState('')
    const [clocksArray, setClocksArray] = useState([])

    const handleChange = (e) => {
        e.preventDefault()

        if (e.target.name === "name") {
            setName(e.target.value)
        }
        if (e.target.name === "timezone") {
            setTimezone(e.target.value)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setClocksArray((prev) => {
            return [...prev, {
                id: generate(),
                name: name,
                timezone: timezone
            }]
        })
    }

    const handleRemoveClick = (id) => {
        setClocksArray(prev => prev.filter(clock => clock.id !== id))
    }

    return (
        <div className={"world-clock"}>
            <AddClockForm handleSubmit={handleSubmit} handleChange={handleChange}/>
            <div className={"world-clock__clocks"}>
                {clocksArray.map(clock => {
                    return <Clock key={clock.id} clock={clock} removeClock={handleRemoveClick}/>
                })}
            </div>
        </div>
    )

}
