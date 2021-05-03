import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Checkout.css';
import ShippingDetails from './ShippingDetails/ShippingDetails';
import PaymentOption from './PaymentOption/PaymentOption';
import CheckoutNav from './CheckoutNav/CheckoutNav';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import OrderPlaced from './OrderPlaced/OrderPlaced';
import { useSelector } from 'react-redux';

const Routes = () => {

    return (
      <Router>
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
      </Router>
    );
  };

const Checkout = () => {
  

    return(
        <div className="checkoutContainer">
            <CheckoutNav />
            <Routes />
        </div>
    );
};

export default Checkout;