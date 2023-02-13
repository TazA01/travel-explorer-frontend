import React, { useEffect, useState } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import Cities from "./Cities";
import Places from "./Places";
import items from "../dummydata";
import SavedCities from "./SavedCities";
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import '../styles/UserForm.css'



const UserForm = () => {

    const [entertainment, setEntertainment] = useState("");
    const [accommodation, setAccommodation] = useState("");
    const [tourism, setTourism] = useState("");
    const [catering, setCatering] = useState("");
    const [natural, setNatural] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:5000/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    entertainment: entertainment,
                    accommodation: accommodation,
                    tourism: tourism,
                    catering: catering,
                    natural: natural
                })
            })


            let resJson = await res.json();


            if (res.status === 200) {
                setEntertainment("");
                setAccommodation("");
                setTourism("");
                setCatering("");
                setNatural("");
                setMessage("Data Submitted");
                setData(resJson);
                console.log('success message');
            } else {
                setMessage("Some error occured");
                console.log('error message');
            }
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


    // ----------------MAKE SURE TO PUT DATA PARAM HERE TO USE BACKEND----------------------//
    const cityComponents = displayCityComponents(data);

    const form = (
        <form onSubmit={handleSubmit}>
            <div className="searchCategories">
                <label htmlFor="entertainment">What Do You Like to Do for Entertainment?</label>
                <div className="select">
                    <select id="entertainment" name="entertainment" onChange={(e) => setEntertainment(e.target.value)}>
                        <option value="entertainment">Surprise Me</option>
                        <option value="entertainment.zoo">Zoo</option>
                        <option value="entertainment.culture">Culture</option>
                        <option value="entertainment.museum">Museum</option>
                        <option value="entertainment.theme_park">Theme Park</option>
                        <option value="entertainment.aquarium">Aquarium</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="accommodation">Where Would You Like To Stay?</label>
                <div className="select">
                    <select id="accommodation" name="accommodation" onChange={(e) => setAccommodation(e.target.value)}>
                        <option value="accommodation">Surprise Me</option>
                        <option value="accommodation.hotel">Hotel</option>
                        <option value="accommodation.motel">Motel</option>
                        <option value="accommodation.hostel">Hostel</option>
                        <option value="accommodation.chalet">Chalet</option>
                        <option value="accommodation.apartment">Apartment</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="natural">What Would You Like to See in Nature?</label>
                <div className="select">
                    <select id="natural" name="natural" onChange={(e) => setNatural(e.target.value)}>
                        <option value="natural">Surprise Me</option>
                        <option value="natural.forest">Forest</option>
                        <option value="natural.water">Water</option>
                        <option value="natural.mountain">Mountain</option>
                        <option value="national_park">National Park</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="tourism">What Would You Like to See as a Tourist?</label>
                <div className="select">
                    <select id="tourism" name="tourism" onChange={(e) => setTourism(e.target.value)}>
                        <option value="tourism.sights">Surprise Me</option>
                        <option value="tourism.sights.place_of_worship">Places of Worship</option>
                        <option value="tourism.sights.castle">Castles</option>
                        <option value="tourism.sights.ruines">Ruines</option>
                        <option value="tourism.sights.memorial">Memorials</option>
                        <option value="tourism.attraction.artwork">Art</option>
                    </select>
                </div>
            </div>
            <div className="searchCategories">
                <label className="question" htmlFor="catering">What Kind of Food Would You Like to Eat?</label>
                <div className="select">
                    <select id="catering" name="catering" onChange={(e) => setCatering(e.target.value)}>
                        <option value="catering">Surprise Me</option>
                        <option value="catering.restaurant.mediterranean">Mediterranean</option>
                        <option value="catering.restaurant.caribbean">Caribbean</option>
                        <option value="catering.restaurant.indian">Indian</option>
                        <option value="catering.restaurant.latin_american">Latin American</option>
                        <option value="catering.restaurant.seafood">Seafood</option>
                        <option value="catering.restaurant.asian">Asian</option>
                        <option value="catering.restaurant.western">Western</option>
                        <option value="catering.restaurant.barbecue">Barbeque</option>
                        <option value="catering.fast_food">Fast Food</option>
                        <option value="catering.cafe">Cafes</option>
                        <option value="catering.cafe.dessert">Dessert</option>
                    </select>
                </div>
            </div>
            <Link to='/cities'>
                <button id="submitBtn">Generate Random Destinations!</button>
            </Link>
        </form>)

    // -----------------------------------RETURN STATEMENT-------------------------------------------//
    return (

        <div>

            <div id="image">
                <div id="destinationDiv">
                    <h2 id="firstDestinationHeader">Let us help you find your perfect </h2>
                    <h2 id="secondDestinationHeader">Travel Destination</h2>
                    <h3 id="choose">Choose some of your interests to get started!</h3>
                </div>
                <div id="formDiv"> {form}</div>

                <NavigationBar></NavigationBar>
                <div>
                    {cityComponents.map(elem => (
                        <Cities key={elem[1]}
                            cityName={elem[0]}
                            location={elem[1]}
                            country={elem[2]}
                            image={elem[3]}
                            places={<Places placesInfo={elem[4]} />} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default UserForm; 