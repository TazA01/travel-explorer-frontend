import React from "react";
import PropTypes from "prop-types";
import '../styles/Cities.css';
import axios from "axios";

const Cities = (props) => {

    return (
        <div className="main-cointainer">
            <div id="test">
                <h4>{props.cityName}, {props.country}</h4>
                <button>Save City</button>
                <div><img src={props.image} alt="Image of Country"></img></div>
                <div>Full Location: {props.location}</div>
                <div>
                    {props.places}
                </div>
            </div>
        </div>
    )
}

export default Cities;