import React from "react";
import "../Reservation/Reservation.css";
import Table from "../../Components/Table/Table.js";
import Title from "../../Components/Title/Title";
import '../Content.css'
import icon from '../../Resources/Modal/icon-reservation.png'


const MyReservation = () => {
  return (
    <div>
        <Title title="Mis espacios reservados"/>
      <div className="o-container">
          <Table room={"Salón"} button={"Cambiar reserva"} Modal_icon={icon} Modal_text={"¿Deseas Cambiar tu reserva actual?"} Modal_go={"#/Pages/Reservation"}/>
      </div>
    </div>
  );
};

export default MyReservation;