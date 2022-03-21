import * as React from 'react'
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";
import './main.css'
import './font-awesome-4.7.0/css/font-awesome.css'

export default function MessageHistory({list}) {
    return (
        <div className="chat-body">
            <div className="clearfix container">
                <div className="chat">
                    <div className="chat-history">
                        {list.length === 0 ? null
                            : <ul>
                                {list.map(message => {
                                    switch (message.type) {
                                        case "message":
                                            return <Message key={message.id}
                                                            from={message.from}
                                                            message={message}
                                            />
                                        case "response":
                                            return <Response key={message.id}
                                                             from={message.from}
                                                             message={message}
                                            />

                                        case "typing":
                                            return <Typing key={message.id}
                                                           from={message.from}
                                                           message={message}
                                            />
                                        default:
                                            return null
                                    }
                                })}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
