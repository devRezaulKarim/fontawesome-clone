import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "../slices/iconSlice";
import sortSlice from "../slices/sortSlice";
import familySlice from "../slices/iconFamilySlice";
import licenseSlice from "../slices/licenseSlice";
import styleSlice from "../slices/styleSlice";
import categorySlice from "../slices/categorySlice";
import searchSlice from "../slices/searchSlice";
import gridSlice from "../slices/gridSlice";
import filterToggleSlice from "../slices/filterToggleSlice";

export default configureStore({
  reducer: {
    icons: iconSlice,
    sort: sortSlice,
    families: familySlice,
    license: licenseSlice,
    styles: styleSlice,
    categories: categorySlice,
    search: searchSlice,
    grid: gridSlice,
    filterToggle: filterToggleSlice,
  },
});
