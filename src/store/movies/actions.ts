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
    // wat is huidige state?
    const state = getState();

    // hebben we al resultaten voor deze zoekopdracht?
    // zo ja return (stop! we hebben de data al)
    if (state.movieState.search[searchText] !== undefined) return;

    // zo nee, dan gaan we een request maken, dus de app gaat laden (laat een spinner zien)
    dispatch(appLoading);

    // vertraagt de request 1 seconden (dan kan je die spinner)
    // puur voor het voorbeeld
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // maak een request naar de api
    const result = await searchMoviesByTitle(searchText);

    // on success, (Reponse: True)
    if (result.Response === "True") {
      // maak een actie met type & payload
      const action: TsearchSuccess = {
        type: SEARCH_SUCCESS,
        payload: {
          query: searchText,
          summaries: result.Search,
        },
      };

      // dispatch de actie
      dispatch(action);
    }

    // we zijn klaar met laden, haal de spinner weg
    dispatch(appDoneLoading);
  };
};
