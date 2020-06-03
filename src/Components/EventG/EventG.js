import React from 'react';
import './EventG.css';


const EventG = ({imgEvent, nameEvent, descEvent, placeEvent, linkEvent}) => {
    return ( 
        <div className="col-md-4  o-card">
            <div class="card m-3 rounded">
                <img src={imgEvent} class="card-img-top" alt="invitacion a evento" />
                <div class="card-body o-cardBody">
                    <p class="card-header o-cardHeader">Lugar: {placeEvent}</p>
                    <div className="text-center pt-4 o-cardTitle">
                        <h5 class="card-title">{nameEvent}</h5>
                    </div>
                    <div>
                        <p class="card-text text-justify o-cardText">{descEvent}</p>
                    </div>
                    <div className="p-3 d-flex justify-content-center">
                        <a href={linkEvent} target="_blank" class="btn btn-lg btn-danger">Saber más</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default EventG;