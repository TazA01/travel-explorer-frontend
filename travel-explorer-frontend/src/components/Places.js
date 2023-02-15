import React from "react";
import PropTypes from "prop-types";
import '../styles/Places.css';



const Places = ({ placesInfo }) => {
    return (placesInfo.map(i => {
        return (

            <div key={i[0]}>
                <div id="placeDiv">
                    <div id="placeName">
                        {i[0]}
                    </div>
                    <div className="addressAndCategory">
                        Address: {i[1]}
                    </div>
                    <div className="addressAndCategory">
                        Category: {i[2]}
                    </div>
                </div>
            </div>

        )
    }))

}


export default Places;