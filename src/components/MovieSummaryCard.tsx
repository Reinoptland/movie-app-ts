import React, { ReactElement } from "react";
import { TMovieSummary } from "../entities/movies";

interface Props extends TMovieSummary {}

export default function MovieSummaryCard(props: Props): ReactElement {
  return (
    <div>
      <div key={props.imdbID}>
        <img src={props.Poster} alt={props.Title} />
      </div>
    </div>
  );
}
