import '../styles/SavedCityCard.css'
const SavedCityCard = ({ cityName, country, remove, id, image, location, places }) => {

    return (
        <div id="cityDiv">
            <div><button onClick={() => remove({ id })}>Delete</button></div>
            <p id="nameAndCountry">{cityName}, {country}</p>
            <div id="location">{location}</div>
            <div id="imageDiv"><img src={image} alt="Country" id="cityImage"></img></div>


            <div id="places">
                {places}
            </div>
        </div>
    )
}

export default SavedCityCard