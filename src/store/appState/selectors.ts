import { TStore } from "../../entities/store";

export const selectLoading = (state: TStore) => {
  return state.appState.loading;
};
