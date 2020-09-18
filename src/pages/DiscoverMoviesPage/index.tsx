import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

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

type TParams = {
  searchText: string;
};

export default () => {
  const history = useHistory();
  const params = useParams<TParams>();
  const [searchInput, setsearchInput] = useState(params.searchText || "");
  const [searchState, setSearchState] = useState<TfetchStatus>({
    status: "idle",
  });

  const search = useCallback(async () => {
    // todo: manipulate history

    if (params.searchText === "" || params.searchText === undefined) return;

    setsearchInput(params.searchText);
    setSearchState({ status: "loading" });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await searchMoviesByTitle(params.searchText);

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
  }, [params.searchText]);

  useEffect(() => {
    search();
  }, [search]);

  const addToHistory = () => {
    history.push(`/discover/${encodeURIComponent(searchInput)}`);
  };

  return (
    <div>
      <div>
        <h1>Discover some movies!</h1>
        <p>
          <input
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <button onClick={addToHistory}>Search</button>
        </p>
      </div>
      <DiscoverResult status={searchState} />
    </div>
  );
};
