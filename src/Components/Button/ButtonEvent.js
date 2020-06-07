import React from 'react';
import './ButtonEvent.css';


const Button = ({action, link}) => {
    return ( <div className="o-container-button-event">
        <button className="o-button"><a href={link} target="_blank">{action}</a></button>
    </div> );
}
 
export default Button;