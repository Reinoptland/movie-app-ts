import React, { ReactElement } from "react";
import "./style.css";
import logo from "./logo.svg";

interface Props {}

export default function Spinner({}: Props): ReactElement {
  return (
    <div className="spinner">
      <img src={logo}></img>
    </div>
  );
}
