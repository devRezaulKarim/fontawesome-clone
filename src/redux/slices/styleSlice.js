import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    styles: [],
  },
  reducers: {
    handleStyles: (state, action) => {
      const data = action.payload;
      const prevData = state.styles;
      return {
        styles: prevData.includes(data)
          ? prevData.filter((pd) => pd !== data)
          : [...prevData, data],
      };
    },
    handleResetStyles: () => {
      return {
        styles: [],
      };
    },
  },
});

export const { handleStyles, handleResetStyles } = styleSlice.actions;

export default styleSlice.reducer;
