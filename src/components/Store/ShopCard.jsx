import * as React from 'react'
import './shopCard.css';

export default function ShopCard(props) {
    const {card} = props

    return (
        <div className={"shop-card"} style={{background: "#f5f5f5 no-repeat center/75% url(" + card.img + ")"}}>
            <div className={"shop-card__header"}>
                <h1 className={"shop-card__name"}>{card.name}</h1>
                <span>{card.color}</span>
            </div>

            <div className={"shop-card__footer"}>
                <span>${card.price}</span>
                <button className={"shop-card__button"}>Add to cart</button>
            </div>
        </div>
    )
}
