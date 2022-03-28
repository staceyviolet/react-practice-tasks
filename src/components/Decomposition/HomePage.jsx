import * as React from 'react'

export const HomePage = ({children, logo}) => {
    return (
        <>
            {!logo ? null : <aside><img src={logo} alt={"logo"}/></aside>}
            <div>{children}</div>
        </>
    )
}
