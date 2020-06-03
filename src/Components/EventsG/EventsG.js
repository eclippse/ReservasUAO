import React, { Component } from 'react';
import EventG from '../EventG/EventG.js';
import { listEventsGP } from '../../Constants/listEventsGP.js';
import HeaderP from '../HeaderP/HeaderP.js';




class EventsG extends Component {
    render() {

        return (
            <>
                <HeaderP />
                <div className="card-deck">
                    {listEventsGP && listEventsGP.map((listEventsGP, key) =>
                        <EventG
                            key={key}
                            imgEvent={listEventsGP.imgEvent}
                            nameEvent={listEventsGP.nameEvent}
                            descEvent={listEventsGP.descEvent}
                            placeEvent={listEventsGP.placeEvent}
                            linkEvent={listEventsGP.linkEvent}
                        />
                    )}
                </div>
            </>
        )
    }
}


export default EventsG;