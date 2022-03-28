import * as React from 'react'
import Card from "./Card";

const cards = [
    {
        showImage: true,
        title: "Card title",
        description: `Some quick example text
         to build on the card title and make up the bulk of the card's content.`,
        url: "/"
    },
    {
        title: "Special title treatment",
        description: `With supporting text below as a natural lead-in to additional content.`,
        url: "/"
    }
]


export default function Cards() {
    return (
        cards.map(card => {
            return (
                <>
                    <Card showImageCap={card.showImage}>
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <a href={card.url} className="btn btn-primary">Go somewhere</a>
                    </Card>
                    <br/>
                </>
            )
        })

    )
}
