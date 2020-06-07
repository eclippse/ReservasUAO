import React from "react";
import EventsG from "../../Components/EventsG/EventsG";
import Header from "../../Components/HeaderP/HeaderP";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
          <Header/>
        <EventsG />
      </div>
    );
  }
}

export default Home;
