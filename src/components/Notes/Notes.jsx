import * as React from 'react'
import {useEffect, useState} from "react";
import {Note} from "./Note";
import {NewNote} from "./NewNote";
import {Button} from "./Button";

import './notes.css'

export const Notes = () => {
    const [notes, setNotes] = useState([])
    const [updated, setUpdated] = useState(false)

    const loadData = () => {
        fetch('http://localhost:7000/notes')
            .then(response => response.json())
            .then(response => {
                    setNotes(response)
                }
            )
    }

    const deleteNote = (id) => {
        fetch('http://localhost:7000/notes/' + id, {
            method: 'DELETE'
        }).then(response => response.status === 204 ? setUpdated(!updated)
            : console.log('delete error'))

    }

    const addNewNote = (text) => {
        if (!text) {
            return
        }

        fetch('http://localhost:7000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content: text})
        }).then(response => response.status === 204 ? setUpdated(!updated)
            : console.log('post error'))
    }


    useEffect(loadData, [updated])

    return (
        <div className={'notes'}>
            <div className={'notes__header'}><h2>Notes</h2>
                <Button icon={'🗘'}
                        color={'green'}
                        onClick={loadData}/>
            </div>

            <div className={'notes__body'}>
                {notes.map(note => <Note key={note.id}
                                         note={note}
                                         onDeleteNote={deleteNote}/>)}
            </div>

            <NewNote onAddNewNote={addNewNote}/>
        </div>
    )
}
