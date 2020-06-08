import React from "react";
import RegisterForm from "../../Components/Register/RegisterForm";
import image from "../../Resources/Login/imagen-login.png";
import { Grid } from "@material-ui/core";
import FooterLogin from "../../Components/Footer/FooterLogin";

const Login = () => {
  return (
    <div>
      <Grid container spacing={5} className="o-container-login">
        <Grid item md={8} className="o-container-img">
          <img src={image} />
        </Grid>
        <Grid item md={4} className="o-form">
          <RegisterForm />
        </Grid>
      </Grid>
      <FooterLogin />
    </div>
  );
};

export default Login;
