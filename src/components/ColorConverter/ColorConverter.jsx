import * as React from 'react'
import {useState} from "react";
import './colorConverter.css'

export default function ColorConverter() {
    const [hexInput, setHexInput] = useState('')
    const [convertedToRGB, setConvertedToRGB] = useState('')
    const [hexIsValid, setHexIsValid] = useState(false)

    const handleHexInputChange = (e) => {
        e.preventDefault()
        const value = e.target.value

        if (value.length >= 7) {
            setHexInput(value)
            validateHex(value)
            convertToRgb(value)
        }
    }

    const convertToRgb = (hex) => {
        const rgb = 'rgb(' + hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16)) + ')'

        setConvertedToRGB(rgb)
    }

    const validateHex = (hex) => {
        setHexIsValid(/^#[0-9A-F]{6}$/i.test(hex))
    }

    return (
        <div className={"color-converter"}
             style={hexIsValid ? {background: hexInput} : {background: 'red'}}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={handleHexInputChange}/>
                <div className={`rgb ${hexInput === "#000000" ? 'white-opacity' : 'black-opacity'}`}>
                    {hexIsValid ? convertedToRGB : 'Ошибка!'}
                </div>
            </form>
        </div>
    )
}
