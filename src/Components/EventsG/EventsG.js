import React, { Component } from 'react';
import EventG from '../EventG/EventG.js';
import { listEventsGP } from '../../Constants/listEventsGP.js';
import HeaderP from '../HeaderP/HeaderP.js';
import { Grid } from '@material-ui/core';




class EventsG extends Component {
    render() {

        return (
                <Grid container>
                    {listEventsGP && listEventsGP.map((listEventsGP, key) =>
                        <Grid md={6}>
                        <EventG
                            key={key}
                            imgEvent={listEventsGP.imgEvent}
                            nameEvent={listEventsGP.nameEvent}
                            descEvent={listEventsGP.descEvent}
                            placeEvent={listEventsGP.placeEvent}
                            linkEvent={listEventsGP.linkEvent}
                        />
                        </Grid>
                    )}
                </Grid>
           
        )
    }
}


export default EventsG;