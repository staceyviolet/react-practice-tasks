import * as React from 'react'
import ShopItem from "./ShopItem";

export default function ListView(props) {
    const {items} = props

    return (
        (
            items.map((item, index) => {
                return (<div key={index}>
                    <ShopItem/>
                </div>)

            })
        )
    )
}
