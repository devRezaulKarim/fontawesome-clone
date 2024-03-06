import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { sortFunction } from "../utls/sortFunction";
import { handleUiIcons } from "../redux/slices/iconSlice";
import { iconProcessor } from "../utls/IconProcessor";
import ReactPaginate from "react-paginate";
import AppliedFilters from "./AppliedFilters";

const Icons = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const sort = useSelector((state) => state.sort.sort);
  const selectedFamily = useSelector((state) => state.families.families);
  const selectedLicense = useSelector((state) => state.license.license);
  const selectedStyles = useSelector((state) => state.styles.styles);
  const selectedCategories = useSelector(
    (state) => state.categories.categories
  );
  const searchedWord = useSelector((state) => state.search.search);
  const grids = useSelector((state) => state.grid.grid);

  const dispatch = useDispatch();

  const [allIconsArray, setAllIconsArray] = useState([]);
  const [uiIcons, setUiIcons] = useState(allIconsArray);

  // paginate states

  const [page, setPage] = useState(0);
  const [iconOffset, setIconOffset] = useState(0);
  const [currentIcons, setCurrentIcons] = useState([]);
  const iconsPerPage = 200;
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const icons = iconProcessor(allIcons);
    setAllIconsArray(icons);
    setUiIcons(icons);
  }, [allIcons]);

  useEffect(() => {
    let targetIcons = [...allIconsArray];

    // handling the sorting
    targetIcons = sortFunction(allIconsArray, sort);

    // handling family filtration
    if (selectedFamily.length > 0)
      targetIcons = targetIcons.filter((icon) =>
        selectedFamily.includes(icon.family.toLowerCase())
      );

    // handling family filtration
    if (selectedLicense)
      targetIcons = targetIcons.filter(
        (icon) => icon.license.toLowerCase() === selectedLicense
      );

    // handling style filtration
    if (selectedStyles.length > 0)
      targetIcons = targetIcons.filter((icon) =>
        selectedStyles.includes(icon.Style)
      );

    // handling categories filtration
    if (selectedCategories.length > 0)
      targetIcons = targetIcons.filter((icon) =>
        selectedCategories.every((cat) => icon.category.includes(cat))
      );

    // handling search filtration
    if (searchedWord)
      targetIcons = targetIcons.filter((icon) =>
        icon.icon.split(" ")[1].includes(searchedWord)
      );

    setUiIcons(targetIcons);
    dispatch(handleUiIcons(targetIcons));

    // page resetter
    setIconOffset(0);
    setPage(0);
  }, [
    allIconsArray,
    sort,
    selectedFamily,
    dispatch,
    selectedLicense,
    selectedStyles,
    selectedCategories,
    searchedWord,
  ]);

  useEffect(() => {
    const endOffset = iconOffset + iconsPerPage;
    setCurrentIcons(uiIcons.slice(iconOffset, endOffset));
    setPageCount(Math.ceil(uiIcons.length / iconsPerPage));
  }, [page, uiIcons, iconOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * iconsPerPage) % uiIcons.length;
    setPage(event.selected);
    setIconOffset(newOffset);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div className="w-screen lg:w-full px-4 lg:px-0">
      {uiIcons.length > 0 && (
        <>
          <div className="flex items-center justify-between  py-4">
            <h4 className="font-bold font-quicksand text-xl text-[var(--color-primary)]">
              {uiIcons.length.toLocaleString()} Icons
            </h4>
            <div className="flex-grow ml-4 hidden lg:block">
              <AppliedFilters />
            </div>
            <span className="text-gray-500">{`Page ${
              page + 1
            } of ${pageCount}`}</span>
          </div>
          <div className="flex-grow mb-2 lg:hidden">
            <AppliedFilters />
          </div>
        </>
      )}

      <div
        className={`flex flex-wrap ${
          grids === "Roomy" ? "gap-3 lg:gap-5" : "gap-2 lg:gap-3"
        }`}
      >
        {currentIcons.map((icon) => (
          <Icon key={icon.icon} icon={icon} />
        ))}
      </div>
      <div className="flex justify-center gap-2 flex-wrap my-10">
        {uiIcons.length > 200 && (
          <ReactPaginate
            className="flex gap-4 items-center"
            pageLinkClassName="rounded text-[var(--color-secondary)] p-4 hover:bg-gray-400 hover:text-[var(--color-primary)]"
            activeLinkClassName="bg-[var(--color-secondary)] text-white font-bold hover:bg-[var(--color-secondary)] hover:text-white"
            previousClassName="hidden"
            nextClassName="text-[var(--color-secondary)] font-semibold hover:bg-gray-400 hover:text-[var(--color-primary)] p-4 rounded"
            disabledClassName="hidden"
            breakLabel="..."
            nextLabel="Next ❯"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        )}
      </div>
    </div>
  );
};

export default Icons;
