import * as React from 'react'
import './shopItem.css';

export default function ShopItem(props) {
    const {item} = props

    return (
        <div className={"shop-item"} style={{background: "#f5f5f5 no-repeat left/10% url(" + item.img + ")"}}>
            <h1 className={"shop-item__name"}>{item.name}</h1>
            <span>{item.color}</span>
            <span className={"shop-item__price"}>${item.price}</span>
            <button className={"shop-item__button"}>Add to cart</button>
        </div>
    )
}
