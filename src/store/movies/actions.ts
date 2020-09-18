import { TMovieSummary } from "../../entities/movies";
import { TAppState, TStore } from "../../entities/store";
import { searchMoviesByTitle } from "../../services/omdb";
import { appDoneLoading, appLoading } from "../appState/actions";

export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

type TsearchSuccess = {
  type: "SEARCH_SUCCESS";
  payload: {
    query: string;
    summaries: TMovieSummary[];
  };
};

export type TMoviesActions = TsearchSuccess;

export const searchMoviesThunk = (searchText: string) => {
  return async (dispatch: (action: any) => void, getState: () => TStore) => {
    const state = getState();

    if (state.movieState.search[searchText] !== undefined) return;

    dispatch(appLoading);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = await searchMoviesByTitle(searchText);

    if (result.Response === "True") {
      const action: TsearchSuccess = {
        type: SEARCH_SUCCESS,
        payload: {
          query: searchText,
          summaries: result.Search,
        },
      };

      dispatch(action);
    }

    dispatch(appDoneLoading);
  };
};
