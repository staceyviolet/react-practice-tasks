import * as React from 'react'
import ShopCard from "./ShopCard";

export default function CardsView(props) {
    const {cards} = props

    return (<div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
            {cards.map((card, index) => {
                return (
                    <div key={index}>
                        <ShopCard card={card}/>
                    </div>
                )
            })}
        </div>
    )
}
