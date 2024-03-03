import { gridBtns } from "../utls/gridViewBtns";
import GridViewToggleBtn from "./GridViewToggleBtn";

const GridViewToggleBtns = () => {
  return (
    <div>
      {gridBtns.map((btn) => (
        <GridViewToggleBtn key={btn.title} btn={btn} />
      ))}
    </div>
  );
};

export default GridViewToggleBtns;
