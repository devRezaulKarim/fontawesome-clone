import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "../slices/iconSlice";

export default configureStore({
  reducer: {
    icons: iconSlice,
  },
});
