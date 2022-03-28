import * as React from 'react'

export const TopMenuItem = ({menuItem}) => {
    return (
        <a href={menuItem.path}>{menuItem.title}</a>
    )
}
