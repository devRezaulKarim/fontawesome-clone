/* eslint-disable react/prop-types */
const FilterItem = ({ item }) => {
  return (
    <li className="flex justify-between text-sm text-gray-500 mb-[2px] py-2 pr-2 pl-10 border border-[#F0F1F3] hover:border-gray-400 rounded-xl cursor-pointer relative group">
      <i
        className={`${item.icon} absolute top-1/2 -translate-y-1/2 left-5 -translate-x-1/2 group-hover:hidden`}
      ></i>
      <i
        className={`fa-regular fa-square absolute top-1/2 -translate-y-1/2 left-5 -translate-x-1/2 hidden group-hover:block`}
      ></i>
      <span>{item.name}</span>
      <span>8,888</span>
    </li>
  );
};

export default FilterItem;
