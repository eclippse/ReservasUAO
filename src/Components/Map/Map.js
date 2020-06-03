import React from 'react';
import MapaUAO from '../../Resources/Maps/MAPA-UAO-Socolen-2018.png';
import './Map.css';
import ListReserv from '../ListReserv/ListReserv.js';

const Map = () => {
    return (
        <div className="container">
            <div className="text-center pt-5">
                <h2>Mapa</h2>
            </div>
            <div>
                <div className="container o-cont mt-5 mb-5 p-5">
                    <img src={MapaUAO}
                        className="o-MapUAO"
                        alt="Mapa de la UAO" />
                </div>
            
            <div className="position-absolute o-listR">
                <ListReserv/>
            </div>
            </div>
        </div>

    );
};

export default Map;