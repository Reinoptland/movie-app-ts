import { TAppState } from "../../entities/store";
import { APP_LOADING, TAppStateAction } from "./actions";

const initialState: TAppState = {
  loading: false,
};
// moet een pure function zijn
// moet altijd een state terug geven
export default (state: TAppState = initialState, action: TAppStateAction) => {
  switch (action.type) {
    case APP_LOADING:
      return { loading: true };

    default:
      return state;
  }
};
