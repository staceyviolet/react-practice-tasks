import * as React from 'react'
import FormInput from "../WorkoutsTrack/FormInput";
import {useState} from "react";

export const AddClockForm = ({}) => {
    const [name, setName] = useState('')
    const [timeZone, setTimeZone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormInput fieldName={"name"} fieldValue={name} labelText={"Название"}
                           onChange={(e) => setName(e.target.value)}/>
                <FormInput fieldName={"timeZone"} fieldValue={timeZone} labelText={"Временная Зона"}
                           onChange={(e) => setTimeZone(e.target.value)}/>
            </form>
        </>
    )
}
