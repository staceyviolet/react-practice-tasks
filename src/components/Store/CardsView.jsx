import * as React from 'react'
import {useState} from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";

export default function CardsView(props) {

    const {cards} = props

    return (
        cards.map((card, index) => {
            return (<div key={index}>
                <CardsView/>
            </div>)

        })
    )
}
