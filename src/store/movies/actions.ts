import { TMovieSummary } from "../../entities/movies";
import { TAppState } from "../../entities/store";
import { searchMoviesByTitle } from "../../services/omdb";
import { appDoneLoading, appLoading } from "../appState/actions";

export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

type TsearchSuccess = {
  type: "SEARCH_SUCCESS";
  payload: TMovieSummary[];
};

export type TMoviesActions = TsearchSuccess;

export const searchMoviesThunk = (searchText: string) => {
  // return a thunk
  return async (dispatch: (action: any) => void, getState: () => TAppState) => {
    // todo implement check if we already have the data
    const state = getState();
    // console.log("CURRENT STATE OF THE STORE", state);

    dispatch(appLoading);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // todo fetch data
    const result = await searchMoviesByTitle(searchText);
    console.log(result);

    if (result.Response === "True") {
      const action: TsearchSuccess = {
        type: SEARCH_SUCCESS,
        payload: result.Search,
      };

      dispatch(action);
    }

    dispatch(appDoneLoading);
  };
};
