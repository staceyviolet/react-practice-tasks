import * as React from 'react'

export default function Item({url, mainImage, title, currencyCode, price, quantity}) {

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={mainImage} alt={"main image"}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{currencyCode}{price}</p>
                <p className="item-quantity level-medium">{quantity} left</p>
            </div>
        </div>
    )
}
