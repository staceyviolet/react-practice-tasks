import * as React from 'react'

export const NewsHeader = ({newsHeader}) => {
    return (
        <div>
            <h5>{newsHeader.now}</h5><h5>{newsHeader.country}</h5><h5>{newsHeader.recommended}</h5>
            <span>{newsHeader.time}</span>
        </div>
    )
}
