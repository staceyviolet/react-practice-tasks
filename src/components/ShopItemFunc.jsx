import * as React from 'react'
import PropTypes from "prop-types";
import {ItemModel} from "../models/ItemModel";
import ItemPurchaseInfo from "./ItemPurchaseInfo";
import ItemDescription from "./ItemDescription";
import ItemHighlight from "./ItemHighlight";

function ShopItemFunc(props) {
    const {item} = props

    return (
        <div className={"main-content"}>
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <ItemDescription descriptionFull={item.descriptionFull}/>
            <ItemHighlight/>
            <div className="divider"/>
            <ItemPurchaseInfo currency={item.currency}
                              price={item.price.toFixed(2)}/>
        </div>
    )
}

ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(ItemModel)
}

export default ShopItemFunc
