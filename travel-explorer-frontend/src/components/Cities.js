import React from "react";
import PropTypes from "prop-types";
import '../styles/Cities.css';

const Cities = (props) => {
    return (
        <div className="main-cointainer">
            <div id="test">
                <h4>{props.cityName}, { props.country}</h4>
                <div>Full Location: {props.location}</div>
                <div>
                    {props.places}
                </div>
            </div>
        </div>
    )
}

export default Cities;