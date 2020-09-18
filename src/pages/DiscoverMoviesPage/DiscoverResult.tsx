import React, { ReactElement } from "react";
import { TfetchStatus } from "./index";
import MovieSummaryCard from "../../components/MovieSummaryCard";
import Spinner from "../../components/Spinner";
import DiscoverError from "./DiscoverError";
import { TMovieSummary } from "../../entities/movies";

interface Props {
  summaries: TMovieSummary[];
}

export default function DiscoverResult(props: Props): ReactElement {
  return (
    <div className="results">
      {props.summaries &&
        props.summaries.map((movieSummary) => {
          return (
            <MovieSummaryCard key={movieSummary.imdbID} {...movieSummary} />
          );
        })}
    </div>
  );
}
