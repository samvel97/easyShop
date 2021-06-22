import { combineReducers } from "redux";
import auth from "./auth";
import sortName from "./sortName";

const allReducer = combineReducers({auth,sortName})

export default allReducer