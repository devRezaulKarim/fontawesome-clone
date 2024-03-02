import Link from "next/link";

const NavLinks = ({ item }) => {
  return (
    <>
      <Link href="#" className="text-gray-500">
        {item.includes("solid") ? (
          <i className={`${item} text-[var(--color-primary)]`}></i>
        ) : (
          item
        )}
      </Link>
    </>
  );
};

export default NavLinks;
