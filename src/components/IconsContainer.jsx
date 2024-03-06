import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import Icons from "./Icons";
import { useEffect } from "react";
import { fetchData } from "../redux/slices/iconSlice";
import Spinner from "./Spinner";

const IconsContainer = () => {
  const loading = useSelector((state) => state.icons.isLoading);
  const isFilterOpen = useSelector((state) => state.filterToggle.isOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="bg-[#F0F1F3]">
      <div className="container lg:max-w-[1080px] 2xl:xl:max-w-[1440px] mx-auto flex flex-col items-center lg:items-start lg:flex-row pt-4 min-h-screen">
        <div
          className={`lg:pr-8 ${isFilterOpen ? "block" : "hidden lg:block"}`}
        >
          <Filters />
        </div>
        <div className="px-2 lg:px-0 ">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default IconsContainer;
