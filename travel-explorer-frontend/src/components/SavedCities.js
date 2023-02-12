import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SavedCities = ({ remove, cityName, country, location, image, places, id }) => {

    return (
        <div className="main-cointainer">
            <div id="test">
                <h4>{cityName}, {country}</h4>

                <div><button onClick={() => remove({ id })}>Delete</button></div>

                <div><img src={image} alt="Country"></img></div>
                <div>Full Location: {location}</div>
                <div>
                    {places}
                </div>
            </div>
        </div>
    )
}

export default SavedCities;