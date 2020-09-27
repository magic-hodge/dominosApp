import React, {useState} from "react";
import Location from "./Location";
import LocationArea from "./LocationArea";
import axios from "axios";

function App() {
    
    const [locations, setLocations] = useState([]);

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

    setTimeout(getLocations, 1000);
    
    return(
        <div>
            <h1>Domino's App!</h1>
            <LocationArea onAdd={getLocations}/>
            {locations.map((locationItem, index) => {
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
    );
}

export default App;