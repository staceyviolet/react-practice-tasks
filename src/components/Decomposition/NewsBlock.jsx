import * as React from 'react'

export const NewsBlock = ({news}) => {
    return (
        <div>
            {news.map(item => {
                return <p><i>{item.icon}</i><span>{item.text}</span></p>
            })}
        </div>
    )
}
