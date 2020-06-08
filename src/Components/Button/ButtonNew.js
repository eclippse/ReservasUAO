import React from "react";
import axios from "axios";
import "./ButtonNew.css";
import Modal from "../Modal/Modal";

function popup() {
  alert("¿Reservar salón?");
}

function Button({
  action,
  modal,
  text,
  icon,
  go,
  currentSelection = [],
  data,
  onRefresh,
}) {
  const [modalShow, setModalShow] = React.useState(false);
  const reservar = () => {
    setModalShow(false);
    console.log({
      ...data,
      reservations: [
        ...data.reservations,
        ...currentSelection.map((se) => ({
          coor: se.replace("-", ""),
          user: localStorage.getItem("id"),
        })),
      ],
    });
    axios
      .put(
        `https://ec2-3-21-45-36.us-east-2.compute.amazonaws.com/rooms/${data.id}`,
        {
          ...data,
          reservations: [
            ...data.reservations,
            ...currentSelection.map((se) => ({
              coor: se.replace("-", ""),
              user: localStorage.getItem("id"),
            })),
          ],
        }
      )
      .then((result) => {
        onRefresh();
      });
  };
  return (
    <div className="o-container-button">
      <button className="o-button" onClick={() => setModalShow(modal)}>
        {action}
      </button>
      <Modal
        icon={icon}
        text={`Reservar ${currentSelection.length} horas este espacio?`}
        show={modalShow}
        go={go}
        reservar={reservar}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Button;
