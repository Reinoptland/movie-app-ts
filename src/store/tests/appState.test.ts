import reducers from "../rootReducer";

test("reducers", () => {
  let state;
  state = reducers({ appState: { loading: false } }, { type: "APP_LOADING" });
  expect(state).toEqual({ appState: { loading: true } });
});
