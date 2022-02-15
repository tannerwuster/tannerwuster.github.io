import React from "react";
import { AppBar, Logo } from "./styles";
import "./styles.css";
// import twlogo from "../../images/twlogo.PNG";
import twlogo from "../../images/ezgif.com-gif-maker-2.gif";
// import tannerWU from "../../images/tannerphoto.png";

export const Header = () => {
  return (
    <AppBar>
      {/* Home    About   Projects    Contact */}
      <Logo src={twlogo} alt="twlogo" href="" />
    </AppBar>
  );
};
