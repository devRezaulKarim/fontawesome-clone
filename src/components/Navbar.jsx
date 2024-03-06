import { navLinksItems } from "../utls/navLinksItems";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container max-w-[1080px] mx-auto flex items-center h-20 justify-between">
      <div className="flex gap-20">
        <div className="logo text-2xl">
          <i className="fa-solid fa-font-awesome text-[var(--color-secondary)]"></i>
        </div>
        <ul className="navLinks flex items-center gap-12">
          {navLinksItems.map((item) => (
            <NavLinks key={item} item={item} />
          ))}
        </ul>
      </div>

      <div className="loginBtn">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer relative group"
        >
          {isHovered ? (
            <i className="fa-regular fa-person-to-portal text-2xl text-[var(--color-secondary)]"></i>
          ) : (
            <i className="fa-regular fa-right-to-bracket text-2xl text-gray-500"></i>
          )}

          <span className="absolute right-full -translate-x-1/4  text-sm bg-[var(--color-primary)] px-3 py-1 rounded-sm after:content-[''] after:w-[10px] after:aspect-square after:bg-[var(--color-primary)] after:absolute text-white after:rotate-45 after:right-0 after:translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:-z-10 scale-0 group-hover:scale-100 duration-100 whitespace-nowrap">
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
