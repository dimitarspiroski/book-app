import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BookProvider } from "./context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BookProvider>
    <Router>
      <App />
    </Router>
  </BookProvider>,
  document.getElementById("root")
);
