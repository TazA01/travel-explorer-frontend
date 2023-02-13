import '../styles/SavedCityCard.css'
const SavedCityCard = ({ cityName, country, remove, id, image, location, places }) => {

    return (
        <div id="cityDiv">
            <div id="deleteBtnDiv" >
                <button id="deleteBtn" onClick={() => remove({ id })}>
                    <img id="trashImg" src="https://banner2.cleanpng.com/20180414/rce/kisspng-computer-icons-rubbish-bins-waste-paper-baskets-trash-can-5ad2a84d27c224.3972655115237550851629.jpg" width="30">
                    </img>
                </button>
            </div>
            <p id="nameAndCountry">{cityName}, {country}</p>
            <div id="location">{location}</div>
            <div id="imageDiv"><img src={image} alt="Country" id="cityImage"></img></div>


            <div id="placesDiv">
                <div id="onePlace">
                    {places}
                </div>
            </div>
        </div>
    )
}

export default SavedCityCard