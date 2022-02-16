import React from "react";
import { AppBar, Logo, MenuItem, Menu, Link } from "./styles";
// import "./styles.css";
// import twlogo from "../../images/twlogo.PNG";
import twlogo from "../../images/ezgif.com-gif-maker-2.gif";
// import tannerWU from "../../images/tannerphoto.png";

export const Header = () => {
  return (
    <AppBar>
      {/* Home    About   Projects    Contact */}
      <Menu>
        <Link><MenuItem>Home</MenuItem></Link>
        <Link><MenuItem>About</MenuItem></Link>
        <Link><MenuItem>Skills</MenuItem></Link>
        <Link><MenuItem>Contact</MenuItem></Link>
      </Menu>
      {/* <Logo src={twlogo} alt="twlogo" href="" /> */}
    </AppBar>
  );
};
