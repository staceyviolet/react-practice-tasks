import * as React from 'react'
import Item       from './Item';
import './listing.css'

export default function Listing({ items }) {

    return (
        <div className="item-list">
            {items.filter(item => item.price !== undefined).map(item => {
                return <Item key={item.listing_id}
                             url={item.url}
                             mainImage={item.MainImage?.url_570xN}
                             title={item.title}
                             currencyCode={item.currency_code}
                             price={item.price}
                             quantity={item.quantity}/>
            })}
        </div>
    )
}
