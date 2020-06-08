import React from "react";
import "./App.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navb from "./Components/Navb/Navb";
import Home from "./Pages/Home/Home";
import Reservation from "./Pages/Reservation/Reservation";
import MyReservations from "./Pages/MyReservations/MyReservations";
import Support from "./Pages/Support/Support";
import Map from "./Pages/Map/Map";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Pages" component={Pages} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
