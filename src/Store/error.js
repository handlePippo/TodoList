import { createSlice } from "@reduxjs/toolkit";

const initialState = { error: "" };

const slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default slice.reducer;

export const { setError } = slice.actions;
