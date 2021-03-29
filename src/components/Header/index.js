import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Icon, Logo, MenuItem, Link, Typography } from "./styles";
import "./styles.css";
import  twlogo  from "../../images/twlogo.PNG";
const useStyles = makeStyles((theme) => ({
  button: {
    padding: "8px 8px",
  },
  selectedNavLink: {
    backgroundColor: "#4287f5",
    border: 0,
    borderRadius: 3,
    color: "White",
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
      <Typography>
        <Icon>
          <NavLink to="/home">
          <Logo
            src={twlogo}
            alt="twlogo"
            href=""
           /> 
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
          <Link href="">Projects</Link>
          </MenuItem>
          <MenuItem>
            <Link href="">Contact</Link>
          </MenuItem>
          <MenuItem></MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
};
