import * as React from 'react'

export default function ItemDescription(props) {
    const {descriptionFull} = props

    return (
        <div className="description">
            {descriptionFull}
        </div>
    )
}
