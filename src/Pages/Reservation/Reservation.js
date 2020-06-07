import React from "react";
import "./Reservation.css";
import Split from "../../Components/Options/Options.js";
import Table from "../../Components/Table/Table.js";
import Button from "../../Components/Button/ButtonNew.js";
import Title from "../../Components/Title/Title";
import '../Content.css'
import icon from '../../Resources/Modal/icon-reservation.png'



const Reservation = () => {
  return (
    <div>
        <Title title="Reserva un espacio" />
      <div className="o-container">
          <Split /> 
          <Table room={"Salón"} button={"Reservar"} Modal_icon={icon} Modal_text={"¿Reservar el salón 3104 el Viernes?"} Modal_go={"#/Pages/MyReservations#reservados"}/>
          <Table room={"Salón"} button= {"Reservar"}/>
      </div>
    </div>
  );
};

export default Reservation;
