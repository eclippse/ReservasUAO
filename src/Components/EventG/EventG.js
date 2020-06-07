import React from "react";
import "./EventG.css";
import "../../Pages/Content.css";
import ButtonEvent from "../Button/ButtonEvent";

const EventG = ({ imgEvent, nameEvent, descEvent, placeEvent, linkEvent }) => {
    return (
        <div class="o-container-event">
            <div className="o-container-imgE">
                <img src={imgEvent} alt="invitacion a evento" />
            </div>
            <p className="o-location-home">Lugar -  {placeEvent}</p>
            <div className="o-info">
                <h5>{nameEvent}</h5>
                <p>{descEvent}</p>
            </div>
            <ButtonEvent action={"Saber más"} link={linkEvent} />
        </div>
    );
};

export default EventG;
