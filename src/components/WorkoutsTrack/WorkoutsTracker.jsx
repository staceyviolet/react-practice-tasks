import * as React from 'react'
import {useState} from "react";
import FormInput from "./FormInput";
import WorkoutsList from "./WorkoutsList";
import {generate} from "shortid";

import './workoutsTracker.css';

function WorkoutsTracker() {
    const [date, setDate] = useState('')
    const [distance, setDistance] = useState('')
    const [workouts, setWorkouts] = useState([])
    const [workoutInEditId, setWorkoutInEditId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setWorkouts((prev) => {
            const workoutExists = !!prev.find(workout => workout.date === date)

            if (workoutInEditId !== '') {
                return prev.map(workout => workout.id === workoutInEditId ? {
                    id: workout.id,
                    date: date,
                    distance: distance
                } : workout).sort((a, b) => sortDates(a, b)).reverse()
            }

            if (workoutExists) {
                return prev.map(workout => workout.date === date ? {
                    id: workout.id,
                    date: date,
                    distance: parseFloat(workout.distance) + parseFloat(distance)
                } : workout)

            } else {
                return [...prev, {
                    id: generate(),
                    date: date,
                    distance: distance
                }].sort((a, b) => sortDates(a, b)).reverse()
            }

        })

        setDate('')
        setDistance('')
        setWorkoutInEditId('')
    }

    const handleDelete = (id) => {
        setWorkouts(prev => prev.filter(workout => workout.id !== id))
    }

    const handleEdit = (workout) => {
        setDate(workout.date)
        setDistance(workout.distance)
        setWorkoutInEditId(workout.id)
    }

    const sortDates = (a, b) => {
        const firstDateParts = a.date.split(".");
        const secondDateParts = b.date.split(".");
        return new Date(+firstDateParts[2], firstDateParts[1] - 1, +firstDateParts[0]) - new Date(+secondDateParts[2], secondDateParts[1] - 1, +secondDateParts[0])
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

            <WorkoutsList workouts={workouts} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
    )

}

export default WorkoutsTracker
