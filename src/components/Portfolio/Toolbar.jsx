import * as React from 'react'
import './toolbar.css';

export default class Toolbar extends React.Component {
    render() {
        const {filters, selected, onSelectFilter} = this.props
        return (
            <div className={"toolbar"}>
                {filters.map((filter, index) => {
                    return (
                        <button key={index}
                                onClick={() => onSelectFilter(filter)}
                                style={filter === selected ? {
                                    backgroundColor: "#333",
                                    color: 'white',
                                    marginRight: 5
                                } : {
                                    backgroundColor: "white",
                                    color: '#333',
                                    border: '1px #333 solid',
                                    marginRight: 5
                                }}
                        >
                            {filter}
                        </button>
                    )
                })}
            </div>
        )
    }


}
