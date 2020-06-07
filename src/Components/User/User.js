import React from 'react';
import user from '../../Resources/User/imgUser.png'
import './User.css'
import { Link } from 'react-router-dom';

const User = ({ name, email, img }) => {
    return (<div className="o-container-user">
        <div className="o-info-user">
            <h6 className="o-user-name">{name}</h6>
            <h6 className="o-user-email">{email}</h6>
        </div>
        <div className="o-container-imgUser">
            <img src={img} />
            <Link to="/" className="o-singout"><h6>Salir</h6></Link>
        </div>
    </div>);
}

export default User;