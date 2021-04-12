import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Icon,
  Logo,
  MenuItem,
  Link,
  Typography,
} from "./styles";
import "./styles.css";
import twlogo from "../../images/twlogo.PNG";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>
          <Icon>
            <NavLink to="/home">
              <Logo src={twlogo} alt="twlogo" href="" />
            </NavLink>
          </Icon>
        </Typography>
        <div className="parent-div">
          <MenuItem>
            <Link href="">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="">About</Link>
          </MenuItem>
          <MenuItem>
            <Link href="">Contact</Link>
          </MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
};
