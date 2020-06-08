import React from 'react';
import Title from '../../Components/Title/Title';
import num1 from '../../Resources/Maps/1.png'
import map from '../../Resources/Maps/mapa.png'
import '../Content.css'
import './Map.css'


const Map = () => {

    const type="Salón";
    const room="3102";
    const cant=5;

    const text = `${type} ${room} para ${cant} personas`;
    return ( <div >
            <Title title={"Mapa"}/>
            <div className="o-container">
                <h1>Tus espacios reservados</h1>
                <div className="o-reservation-text">
                    <img src={num1}/>
                    <h6>{text}</h6>
                </div>
                <div className="o-container-map">
                    <img src={map}/>
                </div>
            </div>
    </div> );
}
 
export default Map;