import * as React from 'react'
import {Button} from "./Button";
import {useState} from "react";
import './newNote.css'

export const NewNote = ({onAddNewNote}) => {
    const [text, setText] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        onAddNewNote(text)
        setText('')
    }

    return (
        <div className={'new-note'}>
            <form onSubmit={(e) => handleAdd(e)}>
                <div className={'new-note__fi'}>
                    <label htmlFor={'content'}>New Note</label>
                    <textarea name={'content'} id={'content'} rows="4" value={text}
                              onChange={(e) => setText(e.target.value)}/>
                </div>

                <div className={'new-note__button'}>
                    <Button icon={'➤'} color={'black'}/>
                </div>
            </form>
        </div>
    )
}
