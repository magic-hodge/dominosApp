import React from "react";

function Footer() {
    
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer-class">
            <p>Nick Hodge Domino's Summerlin App - Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;