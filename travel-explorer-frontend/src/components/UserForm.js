import React, { useEffect, useState } from "react";
import axios from 'axios';

const UserForm = () => {

    const [entertainment, setEntertainment] = useState("");
    const [leisure, setLeisure] = useState("");
    const [tourism, setTourism] = useState("");
    const [catering, setCatering] = useState("");
    const [natural, setNatural] = useState("");
    const [message, setMessage] = useState("");

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
                    leisure: leisure,
                    tourism: tourism,
                    catering: catering,
                    natural: natural
                })
            })

            console.log(res);
            let resJson = await res.json();
            //console.log(resJson);
            if (res.status === 200) {
                setEntertainment("");
                setLeisure("");
                setTourism("");
                setCatering("");
                setNatural("");
                setMessage("Data Submitted");
            } else {
                setMessage("Some error occured");
                console.log(setMessage);
            }
        } catch (err) {
            console.log(err);
        }
        console.log('hi');

    };


    return (
        <form onSubmit={handleSubmit} className="UserForm">
            <label htmlFor="entertainment">What Do You Like to Do for Entertainment?:</label>
            <select id="entertainment" name="entertainment" onChange={(e) => setEntertainment(e.target.value)}>
                <option value="entertainment">Surprise Me</option>
                <option value="entertainment.zoo">Zoo</option>
                <option value="entertainment.culture">Culture</option>
                <option value="entertainment.museum">Museum</option>
                <option value="entertainment.theme_park">Theme Park</option>
                <option value="entertainment.aquarium">Aquarium</option>
            </select>
            <label htmlFor="leisure">What Do You Like to Do for Leisure?:</label>
            <select id="leisure" name="leisure" onChange={(e) => setLeisure(e.target.value)}>
                <option value="leisure">Surprise Me</option>
                <option value="leisure.picnic">Picnic</option>
                <option value="leisure.spa">Spa</option>
                <option value="leisure.playground">Playground</option>
            </select>
            <label htmlFor="natural">What Would You Like to See in Nature?:</label>
            <select id="natural" name="natural" onChange={(e) => setNatural(e.target.value)}>
                <option value="natural">Surprise Me</option>
                <option value="natural.forest">Forest</option>
                <option value="natural.water">Water</option>
                <option value="natural.mountain">Mountain</option>
                <option value="national_park">National Park</option>
            </select>
            <label htmlFor="tourism">What Would You Like to See as a Tourist?:</label>
            <select id="tourism" name="tourism" onChange={(e) => setTourism(e.target.value)}>
                <option value="tourism.sights">Surprise Me</option>
                <option value="tourism.sights.place_of_worship">Places of Worship</option>
                <option value="tourism.sights.castle">Castles</option>
                <option value="tourism.sights.ruins">Ruins</option>
                <option value="tourism.sights.memorial">Memorials</option>
                <option value="tourism.attraction.artwork">Art</option>
            </select>
            <label htmlFor="catering">What Kind of Food Would You Like to Eat?:</label>
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
            <button >Generate Random Destinations!</button>
        </form>
    )
}

export default UserForm; 