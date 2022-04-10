import * as React from 'react'
import {useState} from "react";

export const List = ({list, onClick}) => {

    const [activeId, setActiveId] = useState('')
    const [openAll, setOpenAll] = useState(false)

    const handleClick = (user) => {
        setActiveId(user.id)
        onClick(user)
    }

    return (
        <ul className={'users-list__list'}>
            {!openAll ?
                list.slice(0, 3).map(user => {
                    return (
                        <li key={user.id}
                            className={`${activeId === user.id && 'active'}`}
                            onClick={() => handleClick(user)}
                        >
                            {user.name}
                        </li>)
                })
                : list.map(user => {
                        return (
                            <li key={user.id}
                                className={`${activeId === user.id && 'users-list__active'}`}
                                onClick={() => handleClick(user)}
                            >
                                {user.name}
                            </li>)

                    }
                )}
            <li onClick={() => {
                setOpenAll(!openAll)
            }}>{!openAll ? '...' : '...collapse'}
            </li>
        </ul>
    )
}
