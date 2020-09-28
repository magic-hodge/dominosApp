import React from "react";
import Toggle from "./Toggle";

function Location(props) {
    
    const [isToggled, switchToggle] = Toggle();

    return (
        <div>
            <h1 onClick={switchToggle}>{props.address}</h1>
            {isToggled && <div>
                <h2>Gate Code:</h2>
                <h1>{props.gateCode}</h1>
                <a href={`${props.siteMap}`}>Map</a>
                <p>{props.notes}</p>
            </div> }
        </div>
    );
}

export default Location;