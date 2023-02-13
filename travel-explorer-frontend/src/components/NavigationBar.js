import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <main>
            <div id="travelExplorer">
                <h1 id="travel">Travel</h1>
                <h1 id="line"></h1>
                <h1 id="explorer" >Explorer</h1>
            </div>
            <div>
                <Link to='/save'>
                    <button id="savedCitiesBtn">See Saved Cities</button>
                </Link>

            </div>

        </main>

    )
}

export default NavigationBar;