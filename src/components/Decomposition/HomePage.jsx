import * as React from 'react'

/**
 * Represents page wrapper and shows logo if exists.
 * @param children - page components
 * @param {string} logo - path to the logo.
 */
export const HomePage = ({children, logo}) => {
    return (
        <>
            {!logo ? null : <aside><img src={logo} alt={"logo"}/></aside>}
            <div>{children}</div>
        </>
    )
}
