import React from "react";
import PropTypes from "prop-types";
import '../styles/Places.css';


// const Places = (props) => {

//     return (
//         <div className="main-cointainer">
//             <div>
//                 <div>City: {props.place}</div>
//             </div>
//         </div>
//     )
// }

const Places = ({ places }) => {
    return (places.map(i => {
        return (
            <div>
                <div id="placeDiv">
                    Place Name: {i[0]}
                    <div>
                        Address: {i[1]}
                    </div>
                    <div>
                        Category: {i[2]}
                    </div>
                </div>
            </div>

        )
    }))



    // return (
    //     <div className="main-cointainer">
    //         <div>
    //             <div>City: {places}</div>
    //         </div>
    //     </div>
    // )
}


export default Places;