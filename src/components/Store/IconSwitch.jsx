import * as React from 'react'

export default function IconSwitch(props) {
    const {icon, onSwitch} = props

    return (
        <button className={icon} onClick={onSwitch}>
            {icon}
        </button>
    )
}
