import { gridBtns } from "../utls/gridViewBtns";
import GridViewToggleBtn from "./GridViewToggleBtn";
import Sorting from "./Sorting";

const GridViewToggleBtns = () => {
  return (
    <div className="flex items-center gap-4 flex-col md:flex-row px-2 md:px-0">
      <div className="lg:hidden flex items-center justify-center gap-4 text-[var(--color-secondary)] border-[1px] border-gray-300 rounded-xl py-3 px-4 w-full md:w-min whitespace-nowrap">
        <i className="fa-solid fa-bars-filter"></i>
        <button>Show Filter</button>
      </div>
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
