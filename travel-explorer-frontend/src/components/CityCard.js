import '../styles/CityCard.css'
const CityCard = ({ cityName, country, handleSaveClick, image, places, location }) => {

    return (
        <div id='cityMain'>
            <h4 id='cityNameAndCountry'>{cityName}, {country}</h4>
            <div>
                <button id="saveBtn" onClick={() => handleSaveClick(cityName, location, country, image, places)}><img src='https://api.iconify.design/material-symbols/download-rounded.svg?color=%23b8bc00' width="40"></img></button>
            </div>
            <div id='cityImgDiv'><img id="cityImg" src={image} alt="Country"></img></div>
            <div id='cityLocation'>{location}</div>
            <div>
                {places}
            </div>
        </div>
    )

}

export default CityCard;