import React, { ReactElement } from "react";
import { TMovieSummary } from "../entities/movies";
import { Link } from "react-router-dom";

interface Props extends TMovieSummary {}

const styles = {
  width: "25%",
  padding: "10px",
  boxsizing: "border-box",
};

const posterStyles = {
  display: "block",
  maxwidth: "100%",
};

export default function MovieSummaryCard(props: Props): ReactElement {
  return (
    <div style={styles}>
      <Link to={`/movies/${props.imdbID}`}>
        <h3>{props.Title}</h3>
      </Link>
      <p>
        ({props.Type}: {props.Year})
      </p>
      <img style={posterStyles} src={props.Poster} alt={props.Title} />
    </div>
  );
}
