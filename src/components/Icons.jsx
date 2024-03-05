import { useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { sortFunction } from "../utls/sortFunction";

const Icons = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const loading = useSelector((state) => state.icons.isLoading);
  // const error = useSelector((state) => state.icons.error);
  const sort = useSelector((state) => state.sort.sort);
  const selectedFamily = useSelector((state) => state.families.families);

  const [uiIcons, setUiIcons] = useState(allIcons);

  useEffect(() => {
    let targetIcons = [...allIcons];

    // handling the sorting
    targetIcons = sortFunction(allIcons, sort);
    if (selectedFamily.length > 0)
      targetIcons = targetIcons.filter((icon) =>
        selectedFamily.includes(icon.family.toLowerCase())
      );
      
    console.log(targetIcons);
    setUiIcons(targetIcons);
  }, [allIcons, sort, selectedFamily]);

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
