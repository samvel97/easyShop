import { combineReducers } from "redux";
import auth from "./auth";
import pages from "./pages";
const allReducer = combineReducers({auth,pages})

export default allReducer