import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { sortFunction } from "../utls/sortFunction";
import { handleUiIcons } from "../redux/slices/iconSlice";
import { iconProcessor } from "../utls/IconProcessor";

const Icons = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const loading = useSelector((state) => state.icons.isLoading);
  // const error = useSelector((state) => state.icons.error);
  const sort = useSelector((state) => state.sort.sort);
  const selectedFamily = useSelector((state) => state.families.families);
  const selectedLicense = useSelector((state) => state.license.license);
  const selectedStyles = useSelector((state) => state.styles.styles);
  const selectedCategories = useSelector(
    (state) => state.categories.categories
  );

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
  ]);

  if (loading) {
    return <p>Loading.........</p>;
  }
  return (
    <div className="flex flex-wrap gap-5">
      {uiIcons.map((icon) => (
        <Icon key={icon.icon} icon={icon} />
      ))}
    </div>
  );
};

export default Icons;
