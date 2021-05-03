import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProductDescription from "./Components/ProductDesc/ProductDesc";
import Checkout from "./Components/Checkout/Checkout";

const Routes = () => {

  return (
    <Router>
      <Navigation />
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
      </Switch>
    </Router>
  );
};

function App() {
  
  return (
    <div>
      
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
