import * as React from 'react'
import './item.css'

export default function Item({url, mainImage, title, currencyCode, price, quantity}) {

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={mainImage} alt={"main image"}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title?.length > 50 ? title.slice(0, 50) + "..." : title}</p>
                <p className="item-price">{currencyCode === "USD" ? "$"
                                                                    : currencyCode === "EUR" ? "€"
                                                                    : currencyCode + " "}{price}</p>
                <p className={`item-quantity level-medium ${quantity > 24 ? "green" : "red"}`}>{quantity} left</p>
            </div>
        </div>
    )
}
