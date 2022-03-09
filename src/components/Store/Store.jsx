import * as React from 'react'
import {useState} from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";
import {products} from "./products";

export default function Store(props) {

    const [view, setView] = useState()

    return (
        <div>
            <IconSwitch icon={view === "list" ? "view_list": "view_module"} onSwitch={setView}/>
            {view === "cards"
                ? <CardsView cards={products}/>
                : <ListView items={products}/>}
        </div>
    )
}
