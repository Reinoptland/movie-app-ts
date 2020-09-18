export const APP_LOADING = "APP_LOADING";

type TappLoading = {
  type: "APP_LOADING";
};

export const appLoading: TappLoading = { type: APP_LOADING };

export type TAppStateAction = TappLoading;
