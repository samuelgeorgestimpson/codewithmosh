import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./components/app";
import FoodDetail from "./components/foodDetail";
import FoodList from "./components/foodList";
import Contact from "./components/contact";
import Manage from "./components/manage";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Food List</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/manage">Manage</Link>
        </li>
      </ul>
      <Route exact path="/" component={FoodList} />
      <Route path="/detail" component={FoodDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/manage" component={Manage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
