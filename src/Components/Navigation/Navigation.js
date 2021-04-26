import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return(
        <div className="navigationContainer">
            <div>
                <a href="#"><h1>e-Bazaar</h1></a>
            </div>
            <ul className="linkContainer">
                <li className = "divider"><a className="links"  href="#">Home</a></li>
                <li className = "divider"><a className="links" href="#">About</a></li>
                <li className = "divider"><a className="links " href="#">Shop</a></li>
                <li><a className="links" href="#">Help</a></li>
                <button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Your Cart</button>
            </ul>   
        </div>
    );
}

export default Navigation;