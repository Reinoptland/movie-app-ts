import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { appDoneLoading, appLoading } from "../../store/appState/actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<TParams>();
  console.log(params);
  const [searchInput, setsearchInput] = useState(
    params.searchText === undefined ? "" : params.searchText
  );

  console.log(searchInput);
  const [searchState, setSearchState] = useState<TfetchStatus>({
    status: "idle",
  });

  // useCallback, this function should only be redefined if any of its dependencies change
  const search = useCallback(async () => {
    // todo: manipulate history

    if (params.searchText === "" || params.searchText === undefined) return;

    setSearchState({ status: "loading" });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(appLoading);

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

    dispatch(appDoneLoading);
  }, [params.searchText]); // 1 dependency, searchText

  useEffect(() => {
    search();
  }, [search]); // run this effect once, and run it again if the search function changes, run this effect again

  useEffect(() => {
    if (params.searchText !== searchInput && params.searchText !== undefined) {
      setsearchInput(params.searchText);
    }
  }, [params.searchText, searchInput]); // if params.searchText or search

  const addToHistory = () => {
    console.log(searchInput);
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
