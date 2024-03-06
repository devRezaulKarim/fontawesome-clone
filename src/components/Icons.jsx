import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { sortFunction } from "../utls/sortFunction";
import { handleUiIcons } from "../redux/slices/iconSlice";
import { iconProcessor } from "../utls/IconProcessor";

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

  return (
    <div
      className={`flex flex-wrap ${
        grids === "Roomy" ? "gap-3 lg:gap-5" : "gap-2 lg:gap-3"
      }`}
    >
      {uiIcons.map((icon) => (
        <Icon key={icon.icon} icon={icon} />
      ))}
    </div>
  );
};

export default Icons;
