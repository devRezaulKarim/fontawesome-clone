import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import Icons from "./Icons";
import { useEffect } from "react";
import { fetchData } from "../redux/slices/iconSlice";

const IconsContainer = () => {
  const uiIcons = useSelector((state) => state.icons.uiIcons);
  const isFilterOpen = useSelector((state) => state.filterToggle.isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="bg-[#F0F1F3]">
      <div className="container lg:max-w-[1080px] 2xl:xl:max-w-[1440px] mx-auto flex flex-col items-center lg:items-start lg:flex-row pt-4 min-h-screen">
        <div
          className={`lg:pr-8 ${isFilterOpen ? "block" : "hidden lg:block"}`}
        >
          <Filters />
        </div>
        <div className="px-2 lg:px-0">
          {uiIcons.length > 0 && (
            <div className="flex items-center justify-between  py-4">
              <h4 className="font-bold font-quicksand text-xl text-[var(--color-primary)]">
                {uiIcons.length.toLocaleString()} Icons
              </h4>
              <span className="text-gray-500">Page 1 of 20</span>
            </div>
          )}
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default IconsContainer;
