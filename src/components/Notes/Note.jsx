import * as React from 'react'
import {Button} from "./Button";
import './note.css'

export const Note = ({note, onDeleteNote}) => {
    return (
        <div className={"note__wrapper"}>
            <div className={"note__button"}>
                <Button icon={"❌"} onClick={() => onDeleteNote(note.id)}/>
            </div>
            <div className={"note"}>{
                note.content}
            </div>
        </div>
    )
}
