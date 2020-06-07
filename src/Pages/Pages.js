import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navb from "../Components/Navb/Navb";
import Home from "./Home/Home";
import Reservation from "./Reservation/Reservation";
import MyReservations from "./MyReservations/MyReservations";
import Support from "./Support/Support";
import Map from "./Map/Map";
import Footer from "../Components/Footer/Footer";
import Login from "./Login/Login";

function Pages() {
  return (
    <div className="App">
      <Router>
        <Navb />
        <div>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path="/Pages/Home" component={Home} />
            <Route path="/Pages/MyReservations" component={MyReservations} />
            <Route path="/Pages/Reservation" component={Reservation} />
            <Route path="/Pages/Support" component={Support} />
            <Route path="/Pages/Map" component={Map} />
          </Switch> 
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default Pages;