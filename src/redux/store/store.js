import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "../slices/iconSlice";
import sortSlice from "../slices/sortSlice";

export default configureStore({
  reducer: {
    icons: iconSlice,
    sort: sortSlice,
  },
});
