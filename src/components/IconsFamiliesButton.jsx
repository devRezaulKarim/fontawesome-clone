import { useDispatch, useSelector } from "react-redux";
import { handleIconFamilies } from "../redux/slices/iconFamilySlice";

/* eslint-disable react/prop-types */
const IconsFamiliesButton = ({ btn }) => {
  const selectedFamily = useSelector((state) => state.families.families);

  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleIconFamilies(btn.title))}
      className="border-4 border-white focus:border-[var(--color-tertiary)]"
    >
      <div
        className={`flex flex-col items-center justify-center m-[1px] w-32 aspect-square text-[var(--color-primary)]  border-b-4 border-white hover:border-b-[var(--color-secondary)] duration-100 ${
          selectedFamily.includes(btn.title.toLowerCase())
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
        <span className="text-sm mt-3">{btn.title}</span>
      </div>
    </button>
  );
};

export default IconsFamiliesButton;
