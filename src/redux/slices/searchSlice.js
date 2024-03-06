import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    handleSearch: (state, action) => {
      const data = action.payload.toLowerCase();
      return {
        search: data,
      };
    },
  },
});

export const { handleSearch } = searchSlice.actions;

export default searchSlice.reducer;
