import { useSelector } from "react-redux";
import { iconCategories } from "../utls/iconCategories";
import { iconStyles } from "../utls/iconsStyles";
import FilterItem from "./FilterItem";

const Filters = () => {
  const allIcons = useSelector((state) => state.icons.icons);
  const showingIcons = useSelector((state) => state.icons.uiIcons);

  // generating icons Styles

  const iconStyle = iconStyles.map((style) => {
    if (style.name.toLowerCase() === "solid") {
      return {
        ...style,
        count:
          allIcons[style.name.toLowerCase()]?.length +
          allIcons["brands"]?.length,
      };
    }
    return {
      ...style,
      count: allIcons[style.name.toLowerCase()]?.length,
    };
  });

  // generating icons categories

  const categoriesWithIconCount = iconCategories.map((cat) => {
    let count = 0;
    showingIcons.forEach((element) => {
      if (element.category.includes(cat.name)) count++;
    });
    return {
      ...cat,
      count: count,
    };
  });

  const categories = [
    ...new Set(showingIcons.flatMap((icon) => icon.category)),
  ];
  const categoriesToShow = categoriesWithIconCount.filter((cat) =>
    categories.includes(cat.name)
  );

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
          {categoriesToShow.map((item, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
