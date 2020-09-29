import React from "react";
import Toggle from "./Toggle";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import RoomIcon from '@material-ui/icons/Room';

function Location(props) {
    
    const [isToggled, switchToggle] = Toggle();

    return (
        <div className="location">
            <h2 onClick={switchToggle}>{props.address}</h2>
            {isToggled && <div>
                <h3>Gate Code: {props.gateCode}</h3>
                <p>{props.notes}</p>
                <Zoom in={true}>
                    <Fab type="submit"><a href={`${props.siteMap}`}>Map </a> <RoomIcon/></Fab>
                </Zoom>
            </div>}
        </div>
    );
}

export default Location;