import React from "react";
import "./App.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Navb from "./Components/Navb/Navb";
import Home from "./Components/Home/Home";
import Reservation from "./Pages/Reservation/Reservation";
import MyReservations from "./Pages/MyReservations/MyReservations";
import Support from "./Components/Support/Support.js";
import Map from "./Components/Map/Map.js";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navb />
        <div>
          <Switch>
            <Route path="/MyReservations" component={MyReservations} />
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={LoginForm} /> */}
            <Route path="/Reservation" component={Reservation} />
            
            <Route path="/Support" component={Support} />
            <Route path="/Map" component={Map} />
          </Switch> }
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
