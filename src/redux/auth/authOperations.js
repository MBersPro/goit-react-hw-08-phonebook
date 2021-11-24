import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInAuthOperation, signUpAuthOperation } from "../Api";

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
const authOperations = { register, logIn };
export default authOperations;
