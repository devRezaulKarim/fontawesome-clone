import { iconFamilyBtns } from "../utls/iconsFamiliesBtnsIcons";
import IconsFamiliesButton from "./IconsFamiliesButton";

const IconsFamilies = () => {
  return (
    <div className="flex items-center">
      {iconFamilyBtns.map((btn) => (
        <IconsFamiliesButton key={btn.title} btn={btn} />
      ))}
    </div>
  );
};

export default IconsFamilies;
