"use client";

import { useEffect, useState } from "react";

const HeaderSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searched, setSearched] = useState("");

  const handleButtonClick = () => {
    setIsFocused(true);
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest("#headerSearchContainer")) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <div
      onClick={handleButtonClick}
      id="headerSearchContainer"
      className={`container max-w-[900px] mx-auto relative my-6 border-[3px]  rounded-full p-[1px] ${
        isFocused ? "border-[var(--color-tertiary)]" : "border-white"
      }`}
    >
      <i className="fa-solid fa-magnifying-glass absolute left-8 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xl text-[var(--color-primary)]"></i>
      <input
        className="border-2 border-[var(--color-primary)] w-full rounded-full py-4 px-12"
        type="text"
        name="headerSearch"
        placeholder="Search 00000 icons..."
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
      />
      {searched ? (
        <span
          onClick={() => setSearched("")}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-sm px-1 rounded-full cursor-pointer"
        >
          <i className="fa-solid fa-circle-xmark text-lg text-gray-400 hover:text-red-400"></i>
        </span>
      ) : (
        <span className=" absolute right-6 top-1/2 -translate-y-1/2 text-sm text-gray-500">
          Powered by <i className="fa-brands fa-algolia"></i> Algolia
        </span>
      )}
    </div>
  );
};

export default HeaderSearch;
