import * as React from 'react'
import {TopMenuItem} from "./TopMenuItem";

export const TopMenu = ({menuItems}) => {
    return (
        <ul>
            {menuItems.map(menuItem => {
                return <TopMenuItem menuItem={menuItem}/>
            })}
        </ul>
    )
}
