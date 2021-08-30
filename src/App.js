import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Form from "./components/Form";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" component={BookList} exact />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/form" component={Form} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
