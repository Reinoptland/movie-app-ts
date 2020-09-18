import { combineReducers } from "redux";
import appState from "./appState/reducer";
import movieState from "./movies/reducer";

export default combineReducers({
  appState,
  movieState,
});
