import { useDispatch, useSelector } from "react-redux";
import { handleIconFamilies } from "../redux/slices/iconFamilySlice";
import { handleLicense } from "../redux/slices/licenseSlice";

/* eslint-disable react/prop-types */
const IconsFamiliesButton = ({ btn }) => {
  const selectedFamily = useSelector((state) => state.families.families);
  const selectedLicense = useSelector((state) => state.license.license);
  const allSelectedFamily = selectedLicense
    ? [...selectedFamily, selectedLicense]
    : selectedFamily;

  const dispatch = useDispatch();
  const handleSelectFamily = (value) => {
    value === "Free"
      ? dispatch(handleLicense(value))
      : dispatch(handleIconFamilies(value));
  };
  return (
    <button
      onClick={() => handleSelectFamily(btn.title)}
      className="border-4 border-white focus:border-[var(--color-tertiary)] mt-4 lg:mt-0"
    >
      <div
        className={`flex flex-col items-center justify-center m-[1px] w-20 md:w-32 aspect-square text-[var(--color-primary)] border-b-2 md:border-b-4 border-white hover:border-b-[var(--color-secondary)] duration-100 ${
          allSelectedFamily.includes(btn.title.toLowerCase())
            ? "border-b-[var(--color-secondary)] hover:border-b-[var(--color-tertiary)] text-[var(--color-secondary)] hover:text-[var(--color-tertiary)]"
            : "border-white hover:text-[var(--color-secondary)]"
        }`}
      >
        <div
          className={`w-8 aspect-square flex flex-wrap ${
            btn.icons.length < 4 && "text-3xl"
          }`}
        >
          {btn.icons.map((icon) => (
            <i key={icon} className={icon}></i>
          ))}
        </div>
        <span className="text-sm mt-3">{`${
          btn.title === "Brand" ? `${btn.title}s` : `${btn.title}`
        }`}</span>
      </div>
    </button>
  );
};

export default IconsFamiliesButton;
