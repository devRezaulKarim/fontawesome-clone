import { useDispatch, useSelector } from "react-redux";
import {
  handleIconFamilies,
  handleResetFamilies,
} from "../redux/slices/iconFamilySlice";
import { handleLicense } from "../redux/slices/licenseSlice";
import { handleResetStyles, handleStyles } from "../redux/slices/styleSlice";
import {
  handleCategories,
  resetCategories,
} from "../redux/slices/categorySlice";
import { handleSearch } from "../redux/slices/searchSlice";

const AppliedFilters = () => {
  const selectedFamily = useSelector((state) => state.families.families);
  const selectedLicense = [useSelector((state) => state.license.license)];
  const selectedStyles = useSelector((state) => state.styles.styles);
  const selectedCategories = useSelector(
    (state) => state.categories.categories
  );

  const dispatch = useDispatch();

  const allFilters = [
    ...selectedFamily,
    ...selectedLicense,
    ...selectedStyles,
    ...selectedCategories,
  ].filter((af) => af !== "");

  const handleReset = (v) => {
    if (v === "reset") {
      dispatch(handleResetFamilies());
      dispatch(handleLicense(""));
      dispatch(handleResetStyles());
      dispatch(resetCategories());
      dispatch(handleSearch(""));
    } else if (v === "classic" || v === "sharp" || v === "brand") {
      dispatch(handleIconFamilies(v));
    } else if (v === "free") {
      dispatch(handleLicense(v));
    } else if (
      v === "Solid" ||
      v === "Regular" ||
      v === "Light" ||
      v === "Thin" ||
      v === "Duotone"
    ) {
      dispatch(handleStyles(v));
    } else {
      dispatch(handleCategories(v));
    }
  };

  return (
    <div className="flex gap-4 text-xs uppercase">
      {allFilters?.map((f) => (
        <span
          onClick={() => handleReset(f)}
          className="group cursor-pointer py-1 px-3 bg-white rounded-full border-[1px] border-white hover:border-[var(--color-primary)]"
          key={f}
        >
          <span className="group-hover:text-[var(--color-secondary)] font-bold">
            {f}
          </span>
          <i className="fa-solid fa-xmark ml-1 group-hover:text-red-400"></i>
        </span>
      ))}
      {allFilters.length > 0 && (
        <span
          onClick={() => handleReset("reset")}
          className="group cursor-pointer py-1 px-3 rounded-full border-[1px] border-gray-400 hover:border-[var(--color-secondary)]"
        >
          <span className="group-hover:text-[var(--color-secondary)] font-bold">
            reset
          </span>
        </span>
      )}
    </div>
  );
};

export default AppliedFilters;
