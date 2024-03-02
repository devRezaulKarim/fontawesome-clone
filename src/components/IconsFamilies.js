import {
  brandBtn,
  classicBtn,
  freeBtn,
  sharpBtn,
} from "@/utls/iconsFamiliesBtnsIcons";
import IconsFamiliesButton from "./IconsFamiliesButton";

const IconsFamilies = () => {
  return (
    <div className="flex items-center">
      <IconsFamiliesButton btn={classicBtn} />
      <IconsFamiliesButton btn={sharpBtn} />
      <IconsFamiliesButton btn={brandBtn} />
      <IconsFamiliesButton btn={freeBtn} />
    </div>
  );
};

export default IconsFamilies;
