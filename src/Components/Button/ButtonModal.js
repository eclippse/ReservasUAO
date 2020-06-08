import React from 'react';
import './ButtonNew.css';
import Modal from '../Modal/Modal';


function popup () {
    alert("¿Reservar salón?")
}



function Button({action})  {
    return ( <div className="o-container-button">
        <button className="o-button">{action}</button>
    </div> );
}
 
export default Button;