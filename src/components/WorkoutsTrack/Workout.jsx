import * as React from 'react'

export default function Workout({workout}) {
    return (
        <div className={"workout"}>
            <div>{workout.date}</div>
            <div>{workout.distance}</div>
            <div>
                <span className={"delete-workout"}>✘</span>
                <span className={"edit-workout"}>✎</span>
            </div>
        </div>
    )
}
