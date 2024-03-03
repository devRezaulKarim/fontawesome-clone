/* eslint-disable react/prop-types */

const NavLinks = ({ item }) => {
  return (
    <>
      <li to={"#"} className="text-gray-500">
        {item.includes("solid") ? (
          <i className={`${item} text-[var(--color-primary)]`}></i>
        ) : (
          item
        )}
      </li>
    </>
  );
};

export default NavLinks;
