import * as React from 'react'
import {useState} from "react";
import FormInput from "./FormInput";
import WorkoutsList from "./WorkoutsList";

import './workoutsTracker.css';

function WorkoutsTracker() {
    const [date, setDate] = useState('')
    const [distance, setDistance] = useState('')
    const [workouts, setWorkouts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        setWorkouts((prev) => {
            const existingWorkout = prev.find(workout => workout.date === date)
            const existingWorkoutIndex = prev.findIndex(workout => workout.date === date)

            return !!existingWorkout ? prev.splice(existingWorkoutIndex, 1, {
                date: date,
                distance: (parseFloat(existingWorkout.distance) + parseFloat(distance)).toFixed(1)
            }) : [...prev, {
                date: date,
                distance: distance
            }].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).reverse()
        })

        setDate('')
        setDistance('')
    }

    return (
        <div className={"workouts-tracker"}>
            <form onSubmit={handleSubmit}>
                <FormInput fieldName={"date"} fieldValue={date} labelText={"Дата (ДД.ММ.ГГ.)"}
                           onChange={(e) => setDate(e.target.value)}/>

                <FormInput fieldName={"distance"} fieldValue={distance} labelText={"Пройдено км "}
                           onChange={(e) => setDistance(e.target.value)}/>

                <button type={"submit"}>OK</button>
            </form>

            <WorkoutsList workouts={workouts}/>
        </div>
    )

}

export default WorkoutsTracker
