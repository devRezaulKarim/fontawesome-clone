import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "style",
  initialState: {
    categories: [],
  },
  reducers: {
    handleCategories: (state, action) => {
      const data = action.payload;
      const prevData = state.categories;
      return {
        categories: prevData.includes(data)
          ? prevData.filter((pd) => pd !== data)
          : [...prevData, data],
      };
    },
  },
});

export const { handleCategories } = categorySlice.actions;

export default categorySlice.reducer;
