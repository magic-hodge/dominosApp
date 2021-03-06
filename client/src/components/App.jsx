import React, {useState} from "react";
import Header from "./Header";
import Location from "./Location";
import LocationArea from "./LocationArea";
import Footer from "./Footer";
import axios from "axios";

function App() {
    
    const [locations, setLocations] = useState([]);

    // Creates an alphabetized list of locations.
    const sortedLocations = [].concat(locations).sort((a, b) => a.address > b.address ? 1 : -1);

    function getLocations() {
        axios.get('/api')
            .then((res) => {
                const data = res.data;
                setLocations(prevLocations => {
                    return data;
                });
                // console.log('Data received.');
                // console.log(locations);
            })
            .catch(() => {
                console.log('Error retreiving data.');
            });
    }

    setTimeout(getLocations, 100);
    
    return(
        <div className="container">
            <div className="wrapper">
                <Header/>
                <LocationArea onAdd={getLocations}/>
                <div className="location-items">
                    {sortedLocations.map((locationItem, index) => {
                        return <Location
                        key={index}
                        id={index}
                        address={locationItem.address}
                        gateCode={locationItem.gateCode}
                        siteMap={locationItem.siteMap}
                        notes={locationItem.notes}
                        />
                    })}
                </div>
            </div>    
            <Footer/>  
        </div>
    );
}

export default App;