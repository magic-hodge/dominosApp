import React from "react";
import Toggle from "./Toggle";

function Location(props) {
    
    const [isToggled, switchToggle] = Toggle();

    return (
        <div className="location">
            <h2 onClick={switchToggle}>{props.address}</h2>
            {isToggled && <div>
                <h3>Gate Code:</h3>
                <h3>{props.gateCode}</h3>
                <a href={`${props.siteMap}`}>Map</a>
                <p>{props.notes}</p>
            </div> }
        </div>
    );
}

export default Location;