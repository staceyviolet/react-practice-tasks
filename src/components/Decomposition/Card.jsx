import * as React from 'react'

export const Card = ({children, title}) => {
    return (
        <div>
            <h5>{title}</h5>
            {children}
        </div>
    )
}
