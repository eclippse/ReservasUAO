import React from 'react';
import './ButtonNew.css';
import Modal from '../Modal/Modal';



function popup () {
    alert("¿Reservar salón?")
}



function Button({action, modal, text, icon, go})  {
    const [modalShow, setModalShow] = React.useState(false);
    return ( <div className="o-container-button">
        <button className="o-button" onClick={() => setModalShow(modal)}>{action}</button>
        <Modal icon={icon} text={text} show={modalShow} go={go} onHide={() => setModalShow(false)}/>
    </div> );
}
 
export default Button;