//createAsyncThunk will generate three Redux action creators using createAction : pending , fulfilled , and rejected
//createSlice simplifies the process of generating action creators and reducers.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";
// signin api used for user sign-in in SignIn component
export const getPreAsignedUrl = createAsyncThunk(
  "orders/get-pre-asigned-url",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const res = await axios.post(
        "/customer-users/get-pre-asigned-url",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return res.data;
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
const soundAuthSlice = createSlice({
  name: "sounds",
  initialState,
  //logout used for user logout in header.js component
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPreAsignedUrl.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getPreAsignedUrl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.preasignedUrl = action.payload;
    });
    builder.addCase(getPreAsignedUrl.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = soundAuthSlice.actions;

export default soundAuthSlice.reducer;
