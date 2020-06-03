import React, { Component } from 'react';
import LogoH from '../../Resources/logo_Horizontal.png';
import './Navb.css'
import { NavLink } from 'react-router-dom';
import itemsNav from '../../Constants/itemsNav.js';
 
class Navb extends Component {

    render() {

        const { title, url } = this.props;

        return (
            
            <nav className="navbar navbar-expand-md fixed-top o-navbar shadow-lg">
                <a className="navbar-brand" href="#">
                    <img src={LogoH}
                        className="o-logoHUAO"
                        alt="logo Horizontal de UAO Reservas" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <ul className="navbar-nav m-auto">
                        {itemsNav && itemsNav.map((itemsNav, key) =>
                            <li className="nav-item active mr-3 ml-3" key={key}>
                                <NavLink to={itemsNav.url} className="nav-link">
                                    <p className="o-link">{itemsNav.title}</p>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navb;
