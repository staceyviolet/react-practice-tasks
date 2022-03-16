import * as React from 'react'
import './main.css'

export default function Typing({from, message}) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"/> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div>
                <i className="fa fa-circle online"/>
                <i className="fa fa-circle typing"/>
                <i className="fa fa-circle typing-last"/>
            </div>
        </li>
    )
}
