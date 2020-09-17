import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const activeStyles = {
  fontweight: "bold",
  color: "red",
};

export default function NavBar({}: Props): ReactElement {
  return (
    <nav>
      <NavLink activeStyle={activeStyles} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/discover">
        Discover
      </NavLink>
    </nav>
  );
}
