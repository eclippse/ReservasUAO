import React from 'react';
import './ButtonNew.css';


function popup () {
    alert("¿Reservar salón?")
}

const Button = ({action}) => {
    return ( <div className="o-container-button">
        <button className="o-button" onClick={popup}>{action}</button>
    </div> );
}
 
export default Button;