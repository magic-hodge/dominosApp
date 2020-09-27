import React from "react";

function Location(props) {
    return (
        <div>
            <h1>{props.address}</h1>
            <h2>Gate Code:</h2>
            <h1>{props.gateCode}</h1>
            <a href={`${props.siteMap}`}>Map</a>
            <p>{props.notes}</p>
        </div>
    );
}

export default Location;