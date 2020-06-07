import React from 'react';
import './HeaderP.css';
import { Link } from 'react-router-dom';
import TitleHome from '../Title/TitleHome';
import { Grid } from '@material-ui/core';


const Header = () => {
    return (
        <Grid container className="o-container-header">
            <Grid item md={2} >
                <Link to="./Reservation"><button type="button" className="o-container-button-home">Reservar un espacio</button></Link>
            </Grid>
            <Grid item md={8}>
                <TitleHome title={"Eventos UAO"} />
            </Grid>
            <Grid item md={2}>

            </Grid>
        </Grid>
    );
};

export default Header;