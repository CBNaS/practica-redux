import { createStore, combineReducers } from "redux";
import { mathReducer } from "./reducers/reducers";

const MiappReducers = combineReducers({
  mathReducer
});

let store = createStore(
  MiappReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
