import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Places from "./Places";
import SavedCityCard from "./SavedCityCard";
import '../styles/SavedCities.css'


const SavedCities = ({ cityName, country, location, image, places, id }) => {
    const [cityList, setCityList] = useState([])

    let savedCitiesClick = async () => {
        let response = await axios.get("http://travel-explorer.azurewebsites.net/cities/save");
        if (response.data == false) {
            alert('You Have No Saved Cities. Please Save Cities You Want To To Visit!')
        };

        return response.data;
    };

    const convertsavedCitiesData = async () => {

        let res = await savedCitiesClick();
        let savedCitiesArr = [];
        for (let elem in res) {
            let oneCityArr = [res[elem]['city'], res[elem]['country'].trim(), res[elem]['fullLocation'], res[elem]['image'], res[elem]['places'], res[elem]['_id']];
            savedCitiesArr.push(oneCityArr)
        };

        setCityList(savedCitiesArr)
        return (savedCitiesArr)
    }

    useEffect(() => {
        fetch(convertsavedCitiesData())
    })

    const remove = async (id) => {
        console.log(cityList)
        await axios.delete(`http://travel-explorer.azurewebsites.net/cities/delete/${id.id}`).then(() => {
            setCityList(cityList.filter(arr => arr[5] != id.id))
        })
        console.log("id", id.id)
        return (cityList)

    }


    return (
        <div id="main">
            <h2 id="firstH2">Here are your</h2>
            <h2 id="secondH2">Saved Cities</h2>


            {cityList.map(elem => (
                <SavedCityCard key={elem[5]}
                    remove={remove}
                    cityName={elem[0]}
                    country={elem[1]}
                    location={elem[2]}
                    image={elem[3]}
                    id={elem[5]}
                    places={<Places placesInfo={elem[4]} />} />
            ))}


        </div>
    )
}

export default SavedCities;