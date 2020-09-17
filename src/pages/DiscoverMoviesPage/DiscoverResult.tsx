import React, { ReactElement } from "react";
import { TfetchStatus } from "./index";
import MovieSummaryCard from "../../components/MovieSummaryCard";
import Spinner from "../../components/Spinner";
import DiscoverError from "./DiscoverError";

interface Props {
  status: TfetchStatus;
}

export default function DiscoverResult(props: Props): ReactElement {
  switch (props.status.status) {
    case "success":
      return (
        <div className="results">
          {props.status.data.map((movieSummary) => {
            return (
              <MovieSummaryCard key={movieSummary.imdbID} {...movieSummary} />
            );
          })}
        </div>
      );

    case "failed":
      return <DiscoverError error={props.status.error} />;

    case "idle":
      return <></>;

    case "loading":
      return <Spinner />;

    default:
      return <></>;
  }
}

const renderResult = () => {};
