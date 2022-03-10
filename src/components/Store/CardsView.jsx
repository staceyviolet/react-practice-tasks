import * as React from 'react'
import ShopCard from "./ShopCard";

export default function CardsView(props) {
    const {cards} = props

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: '1fr 1fr 1fr',
            rowGap: 50,
            columnGap: 50,
            justifyItems: 'center',
        }}>
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
