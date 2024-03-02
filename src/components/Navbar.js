"use client";

import { navLinksItems } from "@/utls/navLinksItems";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container max-w-[1080px] mx-auto flex items-center h-20 justify-between">
      <div className="flex gap-20">
        <div className="logo relative text-2xl">
          <i className="fa-solid fa-font-awesome text-[var(--color-secondary)]"></i>
          <span className="absolute w-[3px] h-[70%] bg-[#183153] rounded-full left-0 bottom-[6px]"></span>
        </div>
        <div className="navLinks flex items-center gap-12">
          {navLinksItems.map((item) => (
            <NavLinks key={item} item={item} />
          ))}
        </div>
      </div>

      <div className="loginBtn">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer"
        >
          {isHovered ? (
            <i className="fa-regular fa-person-to-portal text-2xl text-[var(--color-secondary)]"></i>
          ) : (
            <i className="fa-solid fa-arrow-right-to-bracket text-2xl text-gray-500"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
