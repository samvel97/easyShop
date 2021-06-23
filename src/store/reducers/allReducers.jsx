import { combineReducers } from "redux";
import auth from "./auth";
import sortName from "./sortName";
import pages from "./pages";
const allReducer = combineReducers({auth,sortName,pages})

export default allReducer