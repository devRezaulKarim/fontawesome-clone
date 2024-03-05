import { createSlice } from "@reduxjs/toolkit";

const licenseSlice = createSlice({
  name: "license",
  initialState: {
    license: "",
  },
  reducers: {
    handleLicense: (state, action) => {
      const data = action.payload.toLowerCase();
      return {
        license: state.license === data ? "" : data,
      };
    },
  },
});

export const { handleLicense } = licenseSlice.actions;
export default licenseSlice.reducer;
