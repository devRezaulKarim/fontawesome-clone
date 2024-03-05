import { useSelector } from "react-redux";
import { iconCategories } from "../utls/iconCategories";
import { iconStyles } from "../utls/iconsStyles";
import FilterItem from "./FilterItem";

const Filters = () => {
  const allIcons = useSelector((state) => state.icons.icons);

  const iconStyle = iconStyles.map((style) => {
    if (style.name.toLowerCase() === "solid") {
      return {
        ...style,
        count:
          allIcons[style.name.toLowerCase()]?.length +
            allIcons["brands"]?.length ?? 0,
      };
    }
    return {
      ...style,
      count: allIcons[style.name.toLowerCase()]?.length ?? 0,
    };
  });
  return (
    <div className="w-60">
      <div>
        <h5 className="text-xs font-bold leading-5 tracking-wide text-[var(--color-primary)]  font-quicksand">
          STYLE
        </h5>
        <ul>
          {iconStyle.map((item) => (
            <FilterItem key={item.name} item={item} style />
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h5 className="text-xs font-bold leading-5 tracking-wide text-[var(--color-primary)]  font-quicksand">
          CATEGORIES
        </h5>
        <ul>
          {iconCategories.map((item, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
