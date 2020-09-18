import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { appDoneLoading, appLoading } from "../../store/appState/actions";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";

import { TMovieSummary } from "../../entities/movies";
import { searchMoviesByTitle } from "../../services/omdb";
import DiscoverResult from "./DiscoverResult";
import { searchMoviesThunk } from "../../store/movies/actions";
import { selectSearchResults } from "../../store/movies/selectors";

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
  const [searchInput, setsearchInput] = useState(
    params.searchText === undefined ? "" : params.searchText
  );

  const searchResults = useSelector(selectSearchResults)[params.searchText];

  useEffect(() => {
    dispatch(searchMoviesThunk(params.searchText));
  }, [dispatch, params.searchText]);

  useEffect(() => {
    setsearchInput(params.searchText || "");
  }, [params.searchText]); // if params.searchText

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
      <DiscoverResult summaries={searchResults} />
    </div>
  );
};
