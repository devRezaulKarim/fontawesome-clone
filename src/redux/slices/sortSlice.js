import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sort: "featured",
  },

  reducers: {
    handleSorting: (state, action) => {
      const data = action.payload.toLowerCase();
      return {
        ...state,
        sort: data,
      };
    },
  },
});

export const { handleSorting } = sortSlice.actions;

export default sortSlice.reducer;
