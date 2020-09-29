import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';
import Toggle from './Toggle';
import CloseIcon from '@material-ui/icons/Close';
import MapIcon from '@material-ui/icons/Map';

function LocationArea(props) {
    
    const [isExpanded, setExpanded] = Toggle();
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
        <div className="location-area">
            <Zoom in={true}>
                    <Fab type="toggle" onClick={setExpanded}>{isExpanded ? <CloseIcon/> : "New Location"}</Fab>
            </Zoom>
            {isExpanded && <form action="/" method="post">
                <input
                    className="address-input"
                    name="address"
                    placeholder="Address. . ."
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
                    className="notes-area"
                    name="notes"
                    placeholder="Additional Notes. . ."
                    rows="3"
                    onChange={handleChange}
                    value={location.notes}
                />
                <Zoom in={true}>
                    <Fab type="submit" onClick={submitLocation}><AddIcon /></Fab>
                </Zoom>
            </form>}
        </div>
    );
}

export default LocationArea;