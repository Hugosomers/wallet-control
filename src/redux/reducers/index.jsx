import { combineReducers } from "redux";
import apisReducer from "./apis";

const rootReducer = combineReducers({
  apisReducer,
});

export default rootReducer;
