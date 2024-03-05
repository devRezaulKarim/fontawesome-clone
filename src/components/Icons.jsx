import { useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";

const Icons = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const loading = useSelector((state) => state.icons.isLoading);
  const error = useSelector((state) => state.icons.error);
  const sort = useSelector((state) => state.sort.sort);

  const [uiIcons, setUiIcons] = useState(allIcons);

  useEffect(() => {
    let targetIcons = [...allIcons];
    targetIcons =
      sort === "alphabetical"
        ? [...targetIcons].sort((a, b) =>
            a.icon.split(" ")[1].localeCompare(b.icon.split(" ")[1])
          )
        : sort === "release"
        ? [...targetIcons].sort((a, b) =>
            b.icon.split(" ")[1].localeCompare(a.icon.split(" ")[1])
          )
        : [...allIcons];

    setUiIcons(targetIcons);
  }, [allIcons, sort]);

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
