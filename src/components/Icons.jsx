import { useSelector } from "react-redux";
import Icon from "./Icon";

const Icons = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const loading = useSelector((state) => state.icons.isLoading);
  const error = useSelector((state) => state.icons.error);

  if (loading) {
    return <p>Loading.........</p>;
  }
  return (
    <div className="flex flex-wrap gap-5">
      {allIcons.map((icon) => (
        <Icon key={icon.icon} icon={icon} />
      ))}
    </div>
  );
};

export default Icons;
