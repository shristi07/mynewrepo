import React from 'react';
import { Link } from 'react-router-dom';
import '../Button/Button.css';
import './OrderPlaced.css';

const OrderPlaced = () => {
    return(
        <div className="orderPlacedContainer">
            <div>
            <i class="fa fa-check-square-o fa-4x" aria-hidden="true"></i>
                <h1>Your Order has been placed</h1>
                <p>Your Order of ______ is on its way to you !</p>
               <Link to = "/"> Continue Shopping </Link>
            </div>
        </div>
    );
};

export default OrderPlaced;