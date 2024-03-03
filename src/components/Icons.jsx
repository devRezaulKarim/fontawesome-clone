import { tempIcons } from "../utls/tempData";
import Icon from "./Icon";

const Icons = () => {
  const icons = tempIcons;
  return (
    <div className="">
      {icons.map((icon) => (
        <Icon key={icon.icon} icon={icon} />
      ))}
    </div>
  );
};

export default Icons;
