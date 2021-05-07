import React from 'react';
import { Switch, Route } from "react-router-dom";

import './Checkout.css';
import ShippingDetails from './ShippingDetails/ShippingDetails';
import PaymentOption from './PaymentOption/PaymentOption';
import CheckoutNav from './CheckoutNav/CheckoutNav';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import OrderPlaced from './OrderPlaced/OrderPlaced';

const Routes = () => {

    return (

        <Switch>
            <Route exact path="/Checkout">
                <ShoppingCart />
            </Route>
            <Route path="/Checkout/ShoppingCart">
                <ShoppingCart />
            </Route>
            <Route path="/Checkout/ShippingDetails">
                <ShippingDetails />
            </Route>
            <Route path="/Checkout/PaymentOption">
                <PaymentOption />
            </Route>
            <Route path="/Checkout/OrderPlaced">
                <OrderPlaced />
            </Route>
        </Switch>
    );
};

const Checkout = () => {


    return (
        <div className="checkoutContainer">
            <CheckoutNav />
            <Routes />
        </div>
    );
};

export default Checkout;