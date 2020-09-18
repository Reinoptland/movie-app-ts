import { TAppState } from "../../entities/store";

const initialState: TAppState = {
  loading: false,
};
// moet een pure function zijn
// moet altijd een state terug geven
export default (state: TAppState = initialState, action: any) => {
  return state;
};
