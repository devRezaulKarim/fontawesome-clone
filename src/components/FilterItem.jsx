import { useDispatch, useSelector } from "react-redux";
import { handleStyles } from "../redux/slices/styleSlice";

/* eslint-disable react/prop-types */
const FilterItem = ({ item, style }) => {
  const selectedStyle = useSelector((state) => state.styles.styles);

  const selectedStyleAndCats = [...selectedStyle];
  const dispatch = useDispatch();

  const handleStyleAndCategoryFiltration = (value) => {
    style ? dispatch(handleStyles(value)) : "";
  };

  console.log(selectedStyle);
  return (
    <li
      onClick={() => handleStyleAndCategoryFiltration(item.name)}
      className={`flex justify-between text-sm text-gray-500 mb-[2px] py-2 pr-2 pl-10 border border-[#F0F1F3] hover:border-gray-400 rounded-xl cursor-pointer relative group ${
        selectedStyleAndCats.includes(item.name.toLowerCase())
          ? "bg-[var(--color-secondary)] text-white"
          : ""
      }`}
    >
      {selectedStyleAndCats.includes(item.name.toLowerCase()) ? (
        <i className="fa-solid fa-square-check absolute top-1/2 -translate-y-1/2 left-5 -translate-x-1/2"></i>
      ) : (
        <span className="absolute top-1/2 -translate-y-1/2 left-5 -translate-x-1/2">
          <i className={`${item.icon}   group-hover:hidden`}></i>
          <i className={`fa-regular fa-square  hidden group-hover:block`}></i>
        </span>
      )}
      <span>{item.name}</span>
      <span>{item.count}</span>
    </li>
  );
};

export default FilterItem;
