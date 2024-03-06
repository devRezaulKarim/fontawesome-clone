import { createSlice } from "@reduxjs/toolkit";

const filterToggleSlice = createSlice({
  name: "filterToggler",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleFilterToggle: (state) => {
      return {
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { handleFilterToggle } = filterToggleSlice.actions;

export default filterToggleSlice.reducer;
