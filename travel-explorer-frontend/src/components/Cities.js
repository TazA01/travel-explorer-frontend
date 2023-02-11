import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import '../styles/Cities.css';
import axios from "axios";



const Cities = (props) => {

    const handleSaveClick = async (e) => {
        e.preventDefault();

        // Send data to the backend via POST
        let postResults = await fetch('http://localhost:5000/cities/save', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "city": props.cityName,
                "country": props.country,
                "fullLocation": props.location,
                "image": props.image,
                "places": props.places.props.placesInfo
            }) // body data type must match "Content-Type" header
        })
        console.log('props.places:', props.places)
        let resJson = await postResults.json();

        //console.log(resJson);
    }

    return (
        <div className="main-cointainer">
            <div id="test">
                <h4>{props.cityName}, {props.country}</h4>
                <button onClick={handleSaveClick}>Save City</button>
                <div><img src={props.image} alt="Country"></img></div>
                <div>Full Location: {props.location}</div>
                <div>
                    {props.places}
                </div>
            </div>
        </div>
    )
}

export default Cities;