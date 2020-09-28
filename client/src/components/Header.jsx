import React from "react";
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return(
        <header className="headerClass">
            <div>
                <a href="index.html">
                    <img className="dominos-logo"
                    src={require("../dominos_logo_ez.png")}
                    alt="Domino's Pizza Logo"
                    width={50}
                    height={50}
                    />
                </a>
            </div>
            <h1>Summerlin, LV</h1>
        </header>
    );
}

export default Header;