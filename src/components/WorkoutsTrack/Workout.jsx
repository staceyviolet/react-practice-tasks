import * as React from 'react'

export default function Workout({workout, onDelete, onEdit}) {
    return (
        <div className={"workout"}>
            <div>{workout.date}</div>
            <div>{workout.distance}</div>
            <div>
                <span className={"delete-workout"} onClick={() => onDelete(workout.id)}>✘</span>
                <span className={"edit-workout"} onClick={() => onEdit(workout)}>✎</span>
            </div>
        </div>
    )
}
