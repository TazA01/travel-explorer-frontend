const CityCard = ({ cityName, country, handleSaveClick, image, places, location }) => {
    return (
        <div>
            <h4>{cityName}, {country}</h4>
            <button onClick={handleSaveClick}>Save City</button>
            <div><img src={image} alt="Country"></img></div>
            <div>Full Location: {location}</div>
            <div>
                {places}
            </div>
        </div>
    )

}

export default CityCard;