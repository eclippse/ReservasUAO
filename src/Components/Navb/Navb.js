import React, { Component } from "react";
import LogoH from "../../Resources/Login/logo_Horizontal.png";
import "./Navb.css";
import { NavLink, Link } from "react-router-dom";
import itemsNav from "../../Constants/itemsNav.js";
import { Grid } from "@material-ui/core";
import User from "../User/User";
import imgUser from "../../Resources/User/imgUser.png";

class Navb extends Component {
  render() {
    const { title, url } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top o-navbar">
          <Grid container className="o-container-nav">
            <Grid item md={2} className="o-container-logo">
              <a className="navbar-brand" href="#/Pages/Home">
                <img
                  src={LogoH}
                  className="o-logoHUAO"
                  alt="logo Horizontal de UAO Reservas"
                />
              </a>
            </Grid>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Grid item md={8}>
              <div className="collapse navbar-collapse " id="navbarCollapse">
                <ul className="navbar-nav m-auto">
                  {itemsNav &&
                    itemsNav.map((itemsNav, key) => (
                      <li class="nav-item active mr-3 ml-3" key={key}>
                        <NavLink to={itemsNav.url} className="nav-link">
                          <p className="o-link">{itemsNav.title}</p>
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            </Grid>
            <Grid item md={2}>
              <User
                name={`${localStorage.getItem("name")} ${localStorage.getItem(
                  "last_name"
                )}`}
                email={localStorage.getItem("email")}
                img={imgUser}
              />
            </Grid>
          </Grid>
        </nav>
      </div>
    );
  }
}

export default Navb;
