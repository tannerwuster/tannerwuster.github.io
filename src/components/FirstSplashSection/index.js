import React from "react";
import { AppBar, Logo } from "./styles";
import "./styles.css";
// import twlogo from "../../images/twlogo.PNG";
import twlogo from "../../images/ezgif.com-gif-maker-2.gif";
// import tannerWU from "../../images/tannerphoto.png";

export const FirstSplashSection = () => {
  return (
    <AppBar>
      <Logo src={twlogo} alt="twlogo" href="" />
    </AppBar>
  );
};
