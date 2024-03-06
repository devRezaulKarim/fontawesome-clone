/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

const Icon = ({ icon }) => {
  const grids = useSelector((state) => state.grid.grid);

  return (
    <button
      className={`bg-white text-[var(--color-primary)]  hover:bg-[#FFD43B] duration-100 rounded-lg flex gap-2 lg:gap-4 relative ${
        grids === "Roomy"
          ? "w-[100px] md:w-32 lg:w-44 flex-col items-center aspect-square justify-center"
          : grids === "Compact"
          ? "w-20 md:w-[100px] lg:w-[125px] flex-col items-center aspect-square justify-center"
          : "w-40 flex-row justify-start items-center py-2 pl-4"
      }`}
    >
      <span
        className={`${icon.license === "Pro" ? "block" : "hidden"} ${
          grids === "Cheatsheet"
            ? "text-[10px] py-0 px-[6px] right-5"
            : grids === "Compact"
            ? "text-[10px] py-0 px-[6px]"
            : "text-xs py-1 px-2 "
        } font-quicksand font-bold tracking-wider bg-[#FFD43B] rounded-lg absolute top-0 -translate-y-1/2`}
      >
        {icon.license.toUpperCase()}
      </span>
      <i
        className={`${icon.icon} ${
          grids === "Roomy"
            ? "text-3xl lg:text-4xl"
            : grids === "Compact"
            ? "text-2xl lg:text-3xl"
            : "text-xl lg:text-2xl"
        } `}
      ></i>
      <span className="text-gray-500 text-sm px-2">
        {icon.icon.split(" ")[1].substr(3, 20)}
      </span>
    </button>
  );
};

export default Icon;
