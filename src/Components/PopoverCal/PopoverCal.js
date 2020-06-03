import React, { useState } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Calendar, { MonthView } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const PopoverCal = () => {

    const [date, setDate] = useState(new Date());
    
    
    const onChange = date => {
        setDate( date ); 

    };

   
    const DateShort = date.toString().split(" ")[1] + " " + date.toString().split(" ")[2] + " " + date.toString().split(" ")[3];
 
    const popover = (
        <Popover id="popover-basic" >
        <Popover.Title as="h3">Calendario
        </Popover.Title>
        <Popover.Content>
        <Calendar
          onChange={onChange}
          value={date}
          
        />
        </Popover.Content>
        </Popover>
    );

    return (
        <div className="pb-5 d-flex align-items-center">
            <div className="o-calendar pb-2 pr-5">
                <OverlayTrigger className="bg-danger" trigger="click" placement="bottom" rootClose="true"  overlay={popover}>
                <Button variant="danger">Calendario</Button>
                </OverlayTrigger>
            </div>
            <div className="o-date">
                <p>{DateShort}</p>
            </div>
        </div>

    );
};

export default PopoverCal;