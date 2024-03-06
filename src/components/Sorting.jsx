import { useState } from "react";
import { sorting, versions } from "../utls/sortingOptions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleSorting } from "../redux/slices/sortSlice";

const Sorting = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState("");

  const handleDocumentClick = (event) => {
    if (!event.target.closest("#sort") && !event.target.closest("#version")) {
      setIsFocused("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <div className="flex items-center gap-2">
      <div
        id="sort"
        className={`p-[1px] border-[3px]  rounded-2xl ${
          isFocused === "sort"
            ? "border-[var(--color-tertiary)]"
            : "border-white"
        }`}
      >
        <div className="pr-1 md:pr-3 border-2 border-gray-300 rounded-xl overflow-hidden">
          <select
            onClick={() => setIsFocused("sort")}
            onChange={(e) => dispatch(handleSorting(e.target.value))}
            className=" py-2 md:py-3 px-1 md:px-3 outline-none text-sm md:text-base cursor-pointer"
            name=""
            id=""
          >
            {sorting.map((sort) => (
              <option key={sort}>{sort}</option>
            ))}
          </select>
        </div>
      </div>

      <div
        id="version"
        className={`p-[1px] border-[3px]  rounded-2xl ${
          isFocused === "version"
            ? "border-[var(--color-tertiary)]"
            : "border-white"
        }`}
      >
        <div className="pr-1 md:pr-3pr-3 border-2 border-gray-300 rounded-xl overflow-hidden">
          <select
            onClick={() => setIsFocused("version")}
            className=" py-2 md:py-3 px-1 md:px-3 outline-none text-sm md:text-base cursor-pointer"
            name=""
            id=""
          >
            {versions.map((sort) => (
              <option key={sort}>{sort}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
