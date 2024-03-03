import { iconCategories } from "../utls/iconCategories";
import { iconStyles } from "../utls/iconsStyles";
import FilterItem from "./FilterItem";

const Filters = () => {
  return (
    <div>
      <div>
        <h5>STYLE</h5>
        <ul>
          {iconStyles.map((item) => (
            <FilterItem key={item.name} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <h5>CATEGORIES</h5>
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
