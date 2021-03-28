import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Icon, Logo, MenuItem, Link } from "./styles";
import "./styles.css";

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
        <div className="parent-div">
          <MenuItem>
            <Link href="">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="">About</Link>
          </MenuItem>
          <MenuItem></MenuItem>
          <MenuItem>
            <Link href="">Contact</Link>
          </MenuItem>
          <MenuItem></MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
};
