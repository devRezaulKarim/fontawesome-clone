import { gridBtns } from "../utls/gridViewBtns";
import GridViewToggleBtn from "./GridViewToggleBtn";
import Sorting from "./Sorting";

const GridViewToggleBtns = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        {gridBtns.map((btn) => (
          <GridViewToggleBtn key={btn.title} btn={btn} />
        ))}
      </div>
      <div>
        <Sorting />
      </div>
    </div>
  );
};

export default GridViewToggleBtns;
