import * as React from 'react'
import {TopMenuItem} from "./TopMenuItem";
import generate from "shortid";

/**
 * Represents Top Menu.
 * @param {Array<Object>} menuItems - list of menuItems.
 */
export const TopMenu = ({menuItems}) => {
    return (
        <ul>
            {menuItems.map(menuItem => {
                return <TopMenuItem key={generate()} menuItem={menuItem}/>
            })}
        </ul>
    )
}
