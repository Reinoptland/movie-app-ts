import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

import { TMovieSummary } from "../../entities/movies";
import { searchMoviesByTitle } from "../../services/omdb";
import DiscoverResult from "./DiscoverResult";

export type TfetchStatus =
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

export default () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<TfetchStatus>({
    status: "idle",
  });

  const search = async () => {
    // todo: manipulate history

    history.push(`/discover/${encodeURIComponent(searchText)}`);
    setSearchState({ status: "loading" });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await searchMoviesByTitle(searchText);

      if (response.Response === "True") {
        setSearchState({ status: "success", data: response.Search });
      } else {
        setSearchState({ status: "failed", error: response.Error });
      }
    } catch (error) {
      setSearchState({
        status: "failed",
        error: "something went wrong, try again",
      });
    }
  };

  return (
    <div>
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
      <DiscoverResult status={searchState} />
    </div>
  );
};
