import * as React from 'react'
import {generate} from "shortid";
import Workout from "./Workout";


export default function WorkoutsList({workouts}) {

    return (
        <>
            <div className={"workouts-list-header"}>
                <div>Дата (ДД.ММ.ГГ.)</div>
                <div>Пройдено км</div>
                <div>Действия</div>
            </div>
            <div className={"workouts-list"}>
                {workouts.map(workout => <Workout key={generate()} workout={workout}/>)}
            </div>
        </>

    )

}
