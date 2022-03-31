import * as React from 'react'

/**
 * Represents Top Menu Item.
 * @param {Object} menuItem - menuItem.
 */
export const TopMenuItem = ({menuItem}) => {
    return (
        <li><a href={menuItem.path}>{menuItem.title}</a></li>
    )
}
