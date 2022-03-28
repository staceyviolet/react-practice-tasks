export const TradeExchange = ({exchanges}) => {
    return (
        exchanges.map(exchange => {
            return <span><span>{exchange.name}</span><span>{exchange.rate}</span><span>{exchange.trend}</span></span>
        })
    )
}
