export const APP_LOADING = "APP_LOADING";

type TappLoading = {
  type: "APP_LOADING";
};

export const appLoading: TappLoading = { type: APP_LOADING };

export const APP_DONE_LOADING = "APP_DONE_LOADING";

type TappDoneLoading = {
  type: "APP_DONE_LOADING";
};

export const appDoneLoading: TappDoneLoading = { type: APP_DONE_LOADING };

export type TAppStateAction = TappLoading | TappDoneLoading;
