import { TMovieSummary } from "./movies";

export type TAppState = {
  loading: boolean;
};

export type TMoviesState = {
  search: {
    [key: string]: TMovieSummary[];
  };
};

export type TStore = {
  appState: TAppState;
};
