import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { setSearchTerm } = appSlice.actions;

export const selectSearchTerm = ({ app }) => app.searchTerm;

export default appSlice.reducer;
