import React from 'react';
import './HeaderP.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <div className="container d-flex pb-5">
            <div className="col-2">
            <Link to="./Reservation"><button type="button" class="btn btn-outline-danger pt-2  border border-danger rounded o-bt">Reservar un espacio</button></Link>
            </div>
            <div className="col-9 text-center">
                <h4> Eventos UAO </h4>
            </div>
        </div>
    );
};

export default Header;