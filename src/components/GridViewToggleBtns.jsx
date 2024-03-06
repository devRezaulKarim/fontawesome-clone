import { useDispatch, useSelector } from "react-redux";
import { gridBtns } from "../utls/gridViewBtns";
import GridViewToggleBtn from "./GridViewToggleBtn";
import Sorting from "./Sorting";
import { handleFilterToggle } from "../redux/slices/filterToggleSlice";

const GridViewToggleBtns = () => {
  const isFilterOpen = useSelector((state) => state.filterToggle.isOpen);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 flex-col md:flex-row px-2 md:px-0">
      <button
        onClick={() => dispatch(handleFilterToggle())}
        className="lg:hidden flex items-center justify-center gap-4 text-[var(--color-secondary)] border-[1px] border-gray-300 rounded-xl py-3 px-4 w-full md:w-min whitespace-nowrap"
      >
        <i
          className={`fa-solid fa-bars-filter duration-300 ${
            isFilterOpen && "-rotate-180"
          }`}
        ></i>
        <span>{isFilterOpen ? "Close Filter" : "Show Filter"}</span>
      </button>
      <div className="flex items-center gap-2 md:gap-4">
        <div>
          {gridBtns.map((btn) => (
            <GridViewToggleBtn key={btn.title} btn={btn} />
          ))}
        </div>
        <div>
          <Sorting />
        </div>
      </div>
    </div>
  );
};

export default GridViewToggleBtns;
