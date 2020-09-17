import React, { useState } from "react";
import { TMovieSummary } from "../../entities/movies";
import { searchMoviesByTitle } from "../../services/omdb";

interface Props {}

type TfetchStatus =
  | {
      status: "loading";
    }
  | {
      status: "idle";
    }
  | {
      status: "success";
      data: TMovieSummary[];
    }
  | {
      status: "failed";
      error: string;
    };

export default (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState<TfetchStatus>({ status: "idle" });

  const search = async () => {
    try {
      const response = await searchMoviesByTitle(searchText);

      if (response.Response === "True") {
        setStatus({ status: "success", data: response.Search });
      } else {
        setStatus({ status: "failed", error: response.Error });
      }
    } catch (error) {
      setStatus({ status: "failed", error: "something went wrong, try again" });
    }
  };

  const searchControls = (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );

  const renderResult = () => {
    switch (status.status) {
      case "success":
        return (
          <div>
            {status.data.map((moviesummary) => {
              return (
                <div key={moviesummary.imdbID}>
                  <img src={moviesummary.Poster} alt={moviesummary.Title} />
                </div>
              );
            })}
          </div>
        );

      case "failed":
        return <div>{status.error}</div>;

      case "idle":
        return null;

      case "loading":
        return <div>Loading</div>;

      default:
        return null;
    }
  };

  return (
    <div>
      {searchControls}
      {renderResult()}
    </div>
  );
};