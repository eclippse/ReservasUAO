import React from "react";
import Option from "./Option";
import "./options.css";

const Options = (props) => {
  return (
    <div className="o-container-options">
      <Option
        {...props.espacio}
        name="Tipo de espacio"
        onChange
        options={["Salón", "Sala de sistemas", "Sala mac"]}
      />
      <Option
        {...props.personas}
        name="Cantidad de personas"
        options={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "Más de 20",
        ]}
      />
      <Option
        name="Día"
        options={[
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
        ]}
      />
      <Option
        name="Hora"
        options={[
          "6 am",
          "7 am",
          "8 am",
          "9 am",
          "10 am",
          "11 am",
          "12 m",
          "1pm",
          "2pm",
          "3pm",
          "4pm",
          "5pm",
          "6pm",
          "7pm",
          "8pm",
        ]}
      />
    </div>
  );
};

export default Options;
