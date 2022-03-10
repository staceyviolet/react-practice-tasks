import * as React from 'react'
import './shopCard.css';

export default function ShopCard(props) {
    const {card} = props

    return (
        <div className={"shop-card"} style={{background: "no-repeat center/100% url(" + card.img + ")"}}>
            <div className={"shop-card__header"}>
                <h1 className={"shop-card__name"}>{card.name}</h1>
                <span>{card.color}</span>
            </div>
            {/*<img src={card.img}/>*/}
            <div className={"shop-card__footer"}>
                <span>${card.price}</span>
                <button className={"shop-card__button"}>Add to cart</button>
            </div>
        </div>
    )
}
