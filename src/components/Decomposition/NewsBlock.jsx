import * as React from 'react'

/**
 * Represents news list.
 * @param {Array<Object>} news - list of news.
 */
export const NewsBlock = ({news}) => {
    return (
        <ul>
            {news.map(item => {
                return <li><i>{item.icon}</i><a href={item.link}>{item.text}</a></li>
            })}
        </ul>
    )
}
