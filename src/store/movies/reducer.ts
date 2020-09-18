import { TMoviesState } from "../../entities/store";
import { SEARCH_SUCCESS, TMoviesActions } from "./actions";

const initialState = {
  search: {},
};

export default (state: TMoviesState = initialState, action: TMoviesActions) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        search: {
          ...state.search,
          [action.payload.query]: action.payload.summaries,
        },
      };

    default:
      return state;
  }
};
