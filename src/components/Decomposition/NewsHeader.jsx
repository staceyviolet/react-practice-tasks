import * as React from 'react'

/**
 * News area selector. Allows to switch between news collections
 * @param {Object} tabs - object containing tabs.
 */
export const NewsHeader = ({tabs}) => {
    return (
        <div>
            <h5>{tabs.now}</h5>
            {/*<h5>{tabs.country}</h5>*/}
            {/*<h5>{tabs.recommended}</h5>*/}
            {/*<span>{tabs.time}</span>*/}
        </div>
    )
}
