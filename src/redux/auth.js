//createAsyncThunk will generate three Redux action creators using createAction : pending , fulfilled , and rejected
//createSlice simplifies the process of generating action creators and reducers.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";
// signin api used for user sign-in in SignIn component
export const signin = createAsyncThunk(
  "auth/signin",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/signin", data);
      const response = await res.data;
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/signup", signupData);
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  user: {},
  token: "",
  isLoading: false,
  error: null,
};
const adminAuthSlice = createSlice({
  name: "auth",
  initialState,
  //logout used for user logout in header.js component
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.data.token.token;
      state.user = action.payload.data.user;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.data?.token?.token;
      state.user = action.payload.data;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
