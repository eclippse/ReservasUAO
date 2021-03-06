import React from 'react';
import './Footer.css'
import logoN from '../../Resources/Footer/logoN.png'
import logoA from '../../Resources/Footer/LogoA.png'
import { Grid } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';
import itemsNav from '../../Constants/itemsNav.js';

const Footer = () => {
  return ( <div className="o-footer-container">
    <div className="o-footer">
    <div className="o-container-logoN">
    <img src={logoN}/>
    </div>
    <div  className="o-container-text">
      <h5>Páginas Institucionales</h5>
      <p><a href="https://www.uao.edu.co/" target="_blank">www.uao.edu.co</a></p>
      <p><a href="https://campus.uaovirtual.edu.co/" target="_blank">www.uaovirtual.edu.co</a></p>
    </div>
    <div className="o-container-text-menu">
      <h5>Links del sitio</h5>
      <Link to="/Pages/Home"><p>Inicio</p></Link>
      <Link to="/Pages/Reservation"><p>Reservar</p></Link>
      <Link to="/Pages/MyReservations"><p>Espacios reservados</p></Link>
      <Link to="/Pages/Map"><p>Mapa</p></Link>
      <Link to="/Pages/Support"><p>Soporte</p></Link>
    </div>
    <div className="o-container-text">
      <h5>Universidad Autónoma de Occidente</h5>
      <p>PBX: + 2 318 8000</p>
      <p>Línea gratuita: 01 8000 91 34 35</p>
      <p>buzon@uao.edu.c</p>
      <p>Calle 25 No. 115-85 km 2 Vía Cali - Jamundí</p>
    </div>
    <div className="o-container-logoA">
    <img src={logoA} />
    </div>
    </div>
  </div> );
}
 
export default Footer;