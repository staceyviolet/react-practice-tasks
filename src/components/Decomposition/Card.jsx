import * as React from 'react'

/**
 * Represents the basic layout element.
 * @param children block content
 * @param {string} title - block title.
 */
export const Card = ({children, title}) => {
    return (
        <div>
            <h5>{title}</h5>
            {children}
        </div>
    )
}
