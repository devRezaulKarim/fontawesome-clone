import { createSlice } from "@reduxjs/toolkit";

const gridSlice = createSlice({
  name: "grid",
  initialState: {
    grid: "Roomy",
  },

  reducers: {
    handleGrid: (state, action) => {
      return {
        grid: action.payload,
      };
    },
  },
});

export const { handleGrid } = gridSlice.actions;

export default gridSlice.reducer;
