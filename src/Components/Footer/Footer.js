import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer className="footerContainer">
            <ul className="footerLinkContainer">
                <li className = "footerDivider"><a className="links"  href="#">Home</a></li>
                <li className = "footerDivider"><a className="links" href="#">About</a></li>
                <li className = "footerDivider"><a className="links" href="#">Shop</a></li>
                <li><a href="#">Help</a></li>
            </ul> 
            <div>
                &copy; e-Bazaar
            </div>
        </footer>
    );
};

export default Footer;