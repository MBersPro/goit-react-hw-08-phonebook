import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./contacts/phoneBookReducers";

const store = configureStore({ reducer: phoneBookReducer });

export default store;
