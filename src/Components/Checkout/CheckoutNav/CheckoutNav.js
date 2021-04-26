import React from 'react';
import './CheckoutNav.css';

const CheckoutNav =()=>{
    return(
        <div className="checkoutNavContainer">
            <ol>
                <li><a href="#">Shopping Cart</a></li>
                <li><a href="#">Shipping Details</a></li>
                <li><a href="#">Payment Options</a></li>
            </ol>
        </div>
    );
};

export default CheckoutNav;