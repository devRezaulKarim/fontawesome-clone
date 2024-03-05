import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { sortFunction } from "../utls/sortFunction";
import { handleUiIcons } from "../redux/slices/iconSlice";

const Icons = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const loading = useSelector((state) => state.icons.isLoading);
  // const error = useSelector((state) => state.icons.error);
  const sort = useSelector((state) => state.sort.sort);
  const selectedFamily = useSelector((state) => state.families.families);
  const selectedLicense = useSelector((state) => state.license.license);

  const dispatch = useDispatch();

  const [uiIcons, setUiIcons] = useState(allIcons);

  useEffect(() => {
    let targetIcons = [...allIcons];

    // handling the sorting
    targetIcons = sortFunction(allIcons, sort);
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

    console.log(targetIcons);

    setUiIcons(targetIcons);
    dispatch(handleUiIcons(targetIcons));
  }, [allIcons, sort, selectedFamily, dispatch, selectedLicense]);

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
