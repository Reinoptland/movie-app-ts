// src/store/index.js
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";

const w: any = window as any;

const devTools: any = w.__REDUX_DEVTOOLS_EXTENSION__
  ? w.__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(reducer, enhancer);

export default store;
