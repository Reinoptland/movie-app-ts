import { TStore } from "../../entities/store";

export const selectSearchResults = (state: TStore) => {
  return state.movieState.search;
};
