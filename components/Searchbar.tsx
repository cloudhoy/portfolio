"use client";

import { useClickAway } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { Search, ArrowRight } from "react-feather";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      if (inputRef.current?.style !== undefined)
        inputRef.current.style.opacity = "1";
    } else {
      if (inputRef.current?.style !== undefined)
        inputRef.current.style.opacity = "0";
    }
  }, [isOpen]);

  const handleClick = () => {
    if (!isOpen) setIsOpen(true);
  };

  const handleSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-end transition-all duration-500"
      style={{ width: isOpen ? "80%" : "3rem" }}
    >
      <input
        ref={inputRef}
        className="input input-bordered px-5 pr-14 absolute inset-0 opacity-0 transition-all duration-500"
        style={{ display: isOpen ? "block" : "none" }}
        type="search"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchValueChange}
      />

      <button
        className="btn btn-circle btn-ghost self-end z-10"
        onClick={handleClick}
      >
        {isOpen ? <ArrowRight /> : <Search />}
      </button>
    </div>
  );
};

export default Searchbar;
