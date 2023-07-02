import { React, useEffect, useState } from "react";
import axios from "axios";
import items from "../dummydata";
import Places from "./Places";
import CityCard from "./CityCard";
import '../styles/Cities.css'




const Cities = () => {

    const [data, setData] = useState([]);

    const handleSubmit = async () => {
        try {
            let res = await fetch("http://localhost:5000/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: window.localStorage.getItem("formData")
            })

            let resJson = await res.json();
            const componentData = displayCityComponents(resJson);
            setData(componentData);


        } catch (err) {
            console.log(err);
            return err;
        }

    };

    const displayCityComponents = (data) => {
        let finalArr = []
        const allInfoArr = (Object.entries(data))

        for (let entry in allInfoArr) {
            let locationDataArr = []
            const placeObj = Object.entries(allInfoArr[entry][1].places);
            let allLocationsArr = []

            for (let place in placeObj) {
                let oneLocationArr = []
                oneLocationArr.push(placeObj[place][0], placeObj[place][1].address, placeObj[place][1].category);
                allLocationsArr.push(oneLocationArr);

            }

            locationDataArr.push(allInfoArr[entry][0], allInfoArr[entry][1].name, allInfoArr[entry][1].country, allInfoArr[entry][1].image, allLocationsArr);
            finalArr.push(locationDataArr);
        }

        return finalArr;
    }


    useEffect(() => {
        handleSubmit()
    }, [])
    let storage = window.localStorage.getItem('formData')

    const handleSaveClick = async (cityName, location, country, image, places) => {

        // Send data to the backend via POST
        await axios.post('http://localhost:5000/cities/save', {
            "city": cityName,
            "country": country,
            "fullLocation": location,
            "image": image,
            "places": places.props.placesInfo
        }).then(() => {
            alert('City Saved')
        })


    }

    return (
        <div id="citiesMain">
            <h2 id="start">Let's start</h2>
            <h2 id="traveling">traveling!</h2>

            {data.length === 0 ? <h1 className="loader"></h1> : data.map(elem => (
                <CityCard key={elem[1]}
                    handleSaveClick={handleSaveClick}
                    cityName={elem[0]}
                    location={elem[1]}
                    country={elem[2]}
                    image={elem[3]}
                    places={<Places placesInfo={elem[4]} />} />
            ))}



        </div>
    )
}

export default Cities;