import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tasklist from "./tasklist";
import error from "./error";

const reducer = combineReducers({ tasklist, error });

const store = configureStore({ reducer });

export default store;
