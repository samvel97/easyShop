import { createStore } from "redux";
import allReducer from "./reducers/allReducers";

const store = createStore(allReducer)

export default {store}