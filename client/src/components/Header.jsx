import React from "react";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return(
        <header className="headerClass">
            <a href="index.html">
                <img className="dominos-logo"
                src={require("../dominos_logo_ez.png")}
                alt="Domino's Pizza Logo"
                width={75}
                height={75}
                />
            </a>
            <h1>Summerlin, LV</h1>
        </header>
    );
}

export default Header;