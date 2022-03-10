import * as React from 'react'
import './iconSwitch.css';

export default function IconSwitch(props) {
    const {icon, onSwitch} = props

    return (
        <div className={"material-icons " + icon + " icon-switch"} onClick={onSwitch}>
            {icon}
        </div>
    )
}
