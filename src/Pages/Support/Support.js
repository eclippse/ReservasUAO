import React from 'react';
import CardsSupport from '../../Components/CardsSupport/CardsSupport';
import './Support.css';
import Title from '../../Components/Title/Title';


class Support extends React.Component {

    render() {
        return (
            
            <div className="o-support">
                <Title title="Soporte"></Title>
                <p className="o-text">Si necesitas ayuda o informacion acerca de reservar un espacio, no dudes en contáctarnos</p>
                <CardsSupport/>
            </div>
        );
    }

}
export default Support;