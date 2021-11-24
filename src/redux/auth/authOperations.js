import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getCurrUser, logOutUser, signInAuthOperation, signUpAuthOperation } from "../Api";

// const dispath = useDispatch

const register = createAsyncThunk(
  "auth/authRegister",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const { data } = await signUpAuthOperation(credentials);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/authSignIn",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const { data } = await signInAuthOperation(credentials);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue}) => {
      try {
          logOutUser();
          return;
      } catch (err) {
          return rejectWithValue()
      }
  }
);

const getCurrentUser = createAsyncThunk(
    "some/logChange",
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        if (!state.auth.token) {
            return rejectWithValue("We have no token");
        }
        try {
            
            return getCurrUser(state.auth.token);
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
const authOperations = { register, logIn, getCurrentUser, logOut };
export default authOperations;
