import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import '../styles/UserForm.css'



const UserForm = () => {


    const [formData, setFormData] = useState({
        entertainment: "",
        accommodation: "",
        natural: "",
        catering: "",
        tourism: ""
    })

    const storeData = (data) => {
        const stringifiedData = JSON.stringify(data)
        window.localStorage.setItem("formData", stringifiedData)
    }

    const handleChange = (e) => {
        setFormData(prevData => {
            const updatedForm = {
                ...prevData,
                [e.target.name]: e.target.value
            }
            storeData(updatedForm)
            return updatedForm
        })
    }


    const form = (
        <form>
            <div className="searchCategories">
                <label htmlFor="entertainment">What Do You Like to Do for Entertainment?</label>
                <div className="select">
                    <select id="entertainment" name="entertainment" onChange={handleChange}>
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
                    <select id="accommodation" name="accommodation" onChange={handleChange}>
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
                    <select id="natural" name="natural" onChange={handleChange}>
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
                    <select id="tourism" name="tourism" onChange={handleChange}>
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
                    <select id="catering" name="catering" onChange={handleChange}>
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

            </div>


        </div>
    )
}

export default UserForm; 