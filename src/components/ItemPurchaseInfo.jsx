import * as React from 'react'

export default function ItemPurchaseInfo(props) {
    const {currency, price} = props

    return (
        <div className="purchase-info">
            <div className="price">{currency + price}</div>
            <button>Добавить в корзину</button>
        </div>
    )
}
