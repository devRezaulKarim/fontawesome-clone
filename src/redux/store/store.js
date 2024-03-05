import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "../slices/iconSlice";
import sortSlice from "../slices/sortSlice";
import familySlice from "../slices/iconFamilySlice";
import licenseSlice from "../slices/licenseSlice";

export default configureStore({
  reducer: {
    icons: iconSlice,
    sort: sortSlice,
    families: familySlice,
    license:licenseSlice
  },
});
