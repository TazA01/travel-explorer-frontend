import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import items from "../dummydata";
import Places from "./Places";
import CityCard from "./CityCard";
import UserForm from "./UserForm";



const Cities = ({ cityName, country, image, location, places, data }) => {


    // const displayCityComponents = (data) => {
    //     let finalArr = []
    //     const allInfoArr = (Object.entries(data))

    //     for (let entry in allInfoArr) {
    //         let locationDataArr = []
    //         const placeObj = Object.entries(allInfoArr[entry][1].places);
    //         let allLocationsArr = []

    //         for (let place in placeObj) {
    //             let oneLocationArr = []
    //             oneLocationArr.push(placeObj[place][0], placeObj[place][1].address, placeObj[place][1].category);
    //             allLocationsArr.push(oneLocationArr);

    //         }

    //         locationDataArr.push(allInfoArr[entry][0], allInfoArr[entry][1].name, allInfoArr[entry][1].country, allInfoArr[entry][1].image, allLocationsArr);
    //         finalArr.push(locationDataArr);
    //     }

    //     return finalArr;
    // }

    // const cityComponents = displayCityComponents(data);

    const handleSaveClick = async (e) => {
        e.preventDefault();

        // Send data to the backend via POST
        let postResults = await fetch('http://localhost:5000/cities/save', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "city": cityName,
                "country": country,
                "fullLocation": location,
                "image": image,
                "places": places.props.placesInfo
            })
        })
        //let resJson = await postResults.json();

    }

    return (
        <div className="main-cointainer">
             <div id="test">
                <h4>{cityName}, {country}</h4>
                <button onClick={handleSaveClick}>Save City</button>
                <div><img src={image} alt="Country"></img></div>
                <div>Full Location: {location}</div>
                <div>
                    {places}
                </div> 
            </div> 

            {/* <div>
                {cityComponents.map(elem => (
                    <CityCard key={elem[1]}
                        cityName={elem[0]}
                        location={elem[1]}
                        country={elem[2]}
                        image={elem[3]}
                        places={<Places placesInfo={elem[4]} />} />
                ))}
            </div> */}
        </div>
    )
}

export default Cities;