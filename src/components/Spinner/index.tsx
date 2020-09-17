import React, { ReactElement } from "react";
import "./style.css";
import logo from "./logo.svg";

export default function Spinner(): ReactElement {
  return (
    <div className="spinner">
      <img src={logo} alt="loading"></img>
    </div>
  );
}
