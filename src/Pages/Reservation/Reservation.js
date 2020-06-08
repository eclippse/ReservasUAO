import React, { useEffect, useState } from "react";
import "./Reservation.css";
import Split from "../../Components/Options/Options.js";
import Table from "../../Components/Table/Table.js";
import Button from "../../Components/Button/ButtonNew.js";
import Title from "../../Components/Title/Title";
import "../Content.css";
import icon from "../../Resources/Modal/icon-reservation.png";
import axios from "axios";

const Reservation = () => {
  const [rooms, setRooms] = useState([]);
  const [currentType, setType] = useState("salon");
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
            }
          }
        }`,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.data?.rooms?.length) {
          setRooms(res.data?.data?.rooms);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const filterRooms = rooms.filter((r) => r.type === currentType);
  const handleOption = (res) => {
    if (res === "Salón") setType("salon");
    else setType(res);
  };

  return (
    <div>
      <Title title="Reserva un espacio" />
      <div className="o-container">
        <Split espacio={{ handleOption }} />
        {filterRooms.map((room) => (
          <Table
            refresh={getData}
            data={room}
            room={`${room.type === "salon" ? "Salón" : room.type} ${room.name}`}
            button={"Reservar"}
            Modal_icon={icon}
            key={room.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Reservation;
