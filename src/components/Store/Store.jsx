import * as React from 'react'
import {useState} from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";

export default function Store(props) {
    const {products} = props
    const [isListView, setIsListView] = useState(false)

    return (
        <div>
            <IconSwitch icon={isListView ? "view_list" : "view_module"}
                        onSwitch={() => setIsListView(!isListView)}/>
            {!isListView ? <CardsView cards={products}/>
                         : <ListView items={products}/>}
        </div>
    )
}
