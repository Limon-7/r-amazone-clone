import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CheckOutPage from "./pages/CheckoutPage/CheckoutPage";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/checkout" component={Checkout} />
        {/* <Route path="/login" /> */}
      </Switch>
    </div>
  );
}

export default App;
