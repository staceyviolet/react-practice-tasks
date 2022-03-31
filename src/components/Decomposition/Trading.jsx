import generate from "shortid";

/**
 * Block showing exchange rates.
 * @param {Array<Object>} indexes - list of major exchange indexes.
 */
export const Trading = ({indexes}) => {
    return (
        indexes.map(index => {
            return <div key={generate()}><span>{index.name}</span><span>{index.rate}</span><span>{index.trend}</span></div>
        })
    )
}
