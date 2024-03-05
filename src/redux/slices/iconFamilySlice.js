import { createSlice } from "@reduxjs/toolkit";

const familySlice = createSlice({
  name: "iconFamily",
  initialState: {
    families: [],
  },
  reducers: {
    handleIconFamilies: (state, action) => {
      const data = action.payload.toLowerCase();
      const previousData = state.families;
      return {
        families: previousData.includes(data)
          ? previousData.filter((pd) => pd !== data)
          : [...previousData, data],
      };
    },
  },
});
export const { handleIconFamilies } = familySlice.actions;
export default familySlice.reducer;
