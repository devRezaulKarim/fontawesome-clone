import { tempIcons } from "../utls/tempData";
import Icon from "./Icon";

const Icons = () => {
  const icons = tempIcons;
  return (
    <div className="flex flex-wrap justify-between gap-6">
      {icons.map((icon) => (
        <Icon key={icon.icon} icon={icon} />
      ))}
    </div>
  );
};

export default Icons;
