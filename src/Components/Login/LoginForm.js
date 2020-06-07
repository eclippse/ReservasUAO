import React from "react";
import logo from "../../Resources/Login/logo_Horizontal.png";
import "../../Pages/Login/Login.css";
import ButtonLogin from "../Button/ButtonLogin";
import "../../Pages/Content.css";
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from '../../App'

const LoginForm = () => {
  return (
    <div className="o-container-login-form">
      <div className="o-login-form">
        <div className="o-container-logo">
        <img src={logo} />
        </div>
        <div className="o-line"></div>
        <h2 className="o-login">Ingresar</h2>
        <input className="o-user" type="text" placeholder="Usuario..." />
        <input className="o-psd" type="text" placeholder="Contraseña..." />
        <ButtonLogin action="Ingresar" />
        <p>¿Has olvidado tu usuario o contraseña?</p>
      </div>
    </div>
  );
};

export default LoginForm;
