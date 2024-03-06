import { navLinksItems } from "../utls/navLinksItems";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container max-w-[1080px] mx-auto flex items-center h-20 justify-between px-8 lg:px-0 relative">
      <div className=" gap-20 hidden md:flex">
        <div className="logo text-2xl ">
          <i className="fa-solid fa-font-awesome text-[var(--color-secondary)]"></i>
        </div>
        <ul className="flex flex-col md:flex-row items-center gap-10 ">
          {navLinksItems.map((item) => (
            <NavLinks key={item} item={item} />
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="mobileMenu absolute top-full left-0  z-50 bg-white flex flex-col  divide-y-2 w-full border-b-4 border-gray-400 duration-500">
          {navLinksItems.map((item) => (
            <NavLinks key={item} item={item} />
          ))}
        </ul>
      )}

      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="min-w-6 block md:hidden text-2xl"
      >
        {isMenuOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>

      <div className="mobileLogo text-2xl block md:hidden">
        <i className="fa-solid fa-font-awesome text-[var(--color-secondary)]"></i>
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
