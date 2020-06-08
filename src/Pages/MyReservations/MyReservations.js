import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Reservation/Reservation.css";
import Table from "../../Components/Table/Table.js";
import Title from "../../Components/Title/Title";
import "../Content.css";
import icon from "../../Resources/Modal/icon-reservation.png";

const MyReservation = () => {
  const [rooms, setRooms] = useState([]);
  const getData = () => {
    axios
      .post("https://ec2-3-21-45-36.us-east-2.compute.amazonaws.com/graphql", {
        query: `query {
          rooms(sort: "id:ASC") {
            id
            name
            type
            code
            reservations{
              id
              studentCount
              start
              coor
              user
            }
          }
        }`,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.data?.rooms?.length) {
          setRooms(
            res.data?.data?.rooms.map((r) => ({
              ...r,
              reservations: r.reservations?.filter(
                (re) => re.user == `${localStorage.getItem("id")}`
              ),
            }))
          );
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Title title="Mis espacios reservados" />
      <div className="o-container">
        {rooms.map((room) => (
          <Table
            refresh={getData}
            data={room}
            room={`${room.type === "salon" ? "Salón" : room.type} ${room.name}`}
            button={"Cambiar reserva"}
            Modal_icon={icon}
            key={room.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyReservation;
