import React from "react";
import "../Reservation/Reservation.css";
import Table from "../../Components/Table/Table.js";
import Title from "../../Components/Title/Title";
import '../Content.css'
import { height } from "styled-system";


const MyReservation = () => {
  return (
    <div>
        <Title title="Mis espacios reservados" />
      <div className="o-container">
          <Table room={"Salón"} button={"Cambiar reserva"}/>
      </div>
    </div>
  );
};

export default MyReservation;