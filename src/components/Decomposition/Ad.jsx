import * as React from 'react'
import {Card} from "./Card";

/**
 * Represents site ad.
 * @param {boolean} isYandexAd - true if advertisement belongs to Yandex.
 * @param {Object} ad - advertisement.
 */
export const Ad = ({isYandexAd, ad}) => {
    if (isYandexAd) {
        return (
            <div>
                <img src={ad.src} alt={ad.alt}/>
                <Card title={ad.title}>
                    <p> {ad.description}</p>
                </Card>
            </div>
        )
    } else {
        return <img src={ad.src} alt={ad.alt}/>
    }


}
