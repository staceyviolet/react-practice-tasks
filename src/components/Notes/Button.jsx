import * as React from 'react'
import './button.css'

export const Button = ({icon, color, onClick}) => {
    return (
        <button className={`button ${color}`} onClick={onClick}>{icon}</button>
    )
}
