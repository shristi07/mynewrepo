import React from 'react';
import './OrderPlaced.css';

const OrderPlaced = () => {
    return(
        <div className="orderPlacedContainer">
            <div>
            <i class="fa fa-check-square-o fa-4x" aria-hidden="true"></i>
                <h1>Your Order has been placed</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis ea deleniti quas excepturi ab!</p>
                <button className="Cancel">Continue Shopping</button>
            </div>
        </div>
    );
};

export default OrderPlaced;