import React from "react";
import user from "../../Resources/User/imgUser.png";
import "./User.css";
import { Link, useHistory } from "react-router-dom";

const User = ({ name, email, img }) => {
  const history = useHistory();
  const handlelogout = () => {
    localStorage.setItem("jwt", "");
    localStorage.setItem("email", "");
    localStorage.setItem("name", "");
    localStorage.setItem("last_name", "");
    localStorage.setItem("id", "");
    history.push("/");
  };
  return (
    <div className="o-container-user">
      <div className="o-info-user">
        <h6 className="o-user-name">{name}</h6>
        <h6 className="o-user-email">{email}</h6>
      </div>
      <div className="o-container-imgUser">
        <img src={img} />
        <div onClick={handlelogout}>
          <h6>Salir</h6>
        </div>
      </div>
    </div>
  );
};

export default User;
