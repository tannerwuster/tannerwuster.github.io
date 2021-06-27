import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Title,
  Toolbar,
  Icon,
  Logo,
  MenuItem,
  Link,
  Typography,
  Menu,
} from "./styles";
import "./styles.css";
import twlogo from "../../images/twlogo.PNG";

export const FirstSplashSection = () => {
  return (
    <AppBar>
      <Toolbar>
          <Icon>
          <Title>Software Engineer  &  Life Enjoyer</Title>
            <NavLink to="/home">
              <Logo src={twlogo} alt="twlogo" href="" />
            </NavLink>
          </Icon>
          <Menu>
          <MenuItem href="/src/components/Home">About</MenuItem>
          <MenuItem href="/src/components/Projects">Work</MenuItem>
          <MenuItem href="/src/components/Contact">Contact</MenuItem>
          </Menu>
      </Toolbar>
    </AppBar>
  );
};
