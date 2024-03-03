import GridViewToggleBtns from "./GridViewToggleBtns";
import IconsFamilies from "./IconsFamilies";

const HeaderFilters = () => {
  return (
    <div className="container lg:max-w-[1080px] 2xl:xl:max-w-[1440px] mx-auto flex items-center justify-between">
      <IconsFamilies />

      <GridViewToggleBtns />
    </div>
  );
};

export default HeaderFilters;
