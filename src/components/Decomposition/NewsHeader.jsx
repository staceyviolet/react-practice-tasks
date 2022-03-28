import * as React from 'react'

/**
 * News area selector. Allows to switch between news collections
 * @param {Object} newsHeader - object.
 */
export const NewsHeader = ({newsHeader}) => {
    return (
        <div>
            <h5>{newsHeader.now}</h5>
            <h5>{newsHeader.country}</h5>
            <h5>{newsHeader.recommended}</h5>
            <span>{newsHeader.time}</span>
        </div>
    )
}
