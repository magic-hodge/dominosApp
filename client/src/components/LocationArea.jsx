import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';

function LocationArea(props) {
    
    const [location, setLocation] = useState({
        address: "",
        gateCode: "",
        siteMap: "",
        notes: ""
    });
    
    function handleChange(event) {
        const {name, value} = event.target;

        setLocation(prevLocationItem => {
            return {
                ...prevLocationItem,
                [name]: value
            };
        });
    }

    function submitLocation(event) {
        event.preventDefault();

        const payload = {
            address: location.address,
            gateCode: location.gateCode,
            siteMap: location.siteMap,
            notes: location.notes
        };

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data successfully sent to server.');
            })
            .catch((err) => {
                console.log(err);
            });

        props.onAdd(location);
        
        setLocation({
            address: "",
            gateCode: "",
            siteMap: "",
            notes: ""
        });
    }

    return (
        <div>
            <form action="/" method="post">
                <input
                    name="address"
                    placeholder="New Address. . ."
                    onChange={handleChange}
                    value={location.address}
                />
                <input
                    name="gateCode"
                    placeholder="Gate Code. . ."
                    onChange={handleChange}
                    value={location.gateCode}
                />
                <input
                    name="siteMap"
                    placeholder="Site Map. . ."
                    onChange={handleChange}
                    value={location.siteMap}
                />
                <textarea
                    name="notes"
                    placeholder="Additional Notes. . ."
                    rows="3"
                    onChange={handleChange}
                    value={location.notes}
                />
                <Zoom in={true}>
                    <Fab type="submit" onClick={submitLocation}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default LocationArea;