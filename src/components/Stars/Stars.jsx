import * as React from 'react'
import PropTypes from "prop-types";
import Star from "./Star";
import './stars.css';


function Stars(props) {
    const {count} = props

    if (count < 1 || count > 5) {
        return null
    } else {
        return (
            <ul className="card-body-stars u-clearfix">
                {
                    [...Array(count)].map((e, i) => <li key={i}><Star/></li>)
                }
            </ul>
        )
    }
}

Stars.propTypes = {
    count: PropTypes.number
}

export default Stars
