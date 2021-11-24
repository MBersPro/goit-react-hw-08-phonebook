import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import phoneBookReducer from "./contacts/phoneBookReducers";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice"


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};


const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: phoneBookReducer
    }, 
    

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
