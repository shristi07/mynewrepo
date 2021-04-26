import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProductDescription from "./Components/ProductDesc/ProductDesc";
import Checkout from "./Components/Checkout/Checkout";
import OrderPlaced from './Components/OrderPlaced/OrderPlaced'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/productDescription">
          <ProductDescription />
        </Route>
        <Route path="/Checkout">
          <Checkout />
        </Route>
        <Route path="/OrderPlaced">
          <OrderPlaced />
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <div>
      <Navigation />
      <Routes />
      <OrderPlaced />
      <Footer />
    </div>
  );
}

export default App;
