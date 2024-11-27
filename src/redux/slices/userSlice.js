import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAxios from "../../api/UserAxios";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      const response = await userAxios.get("/user");

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Failed to fetch user profile"
      );
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
