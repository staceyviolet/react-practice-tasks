import * as React from 'react'
import Workout from "./Workout";


export default function WorkoutsList({workouts, onDelete, onEdit}) {
    return (
        <>
            <div className={"workouts-list-header"}>
                <div>Дата (ДД.ММ.ГГ.)</div>
                <div>Пройдено км</div>
                <div>Действия</div>
            </div>
            <div className={"workouts-list"}>
                {workouts.map(workout => <Workout key={workout.id}
                                                  workout={workout}
                                                  onDelete={onDelete}
                                                  onEdit={onEdit}/>)}
            </div>
        </>

    )

}
