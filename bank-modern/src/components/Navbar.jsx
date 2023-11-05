import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  return (
    <nav className="flex w-full justify-between py-6">
      <img src={logo} alt="hoobank" className="h-8 w-32" />
      <ul className="hidden sm:flex sm:items-center sm:justify-end sm:gap-9 ">
        {navLinks.map((item, idx) => (
          <li
            key={item.id}
            className="cursor-pointer font-poppins text-base font-normal text-white hover:border-b-[1px] hover:border-b-gray-100"
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="relative flex flex-1 items-center justify-end sm:hidden">
        <img
          src={menuDisplay ? close : menu}
          alt="menu"
          className="h-6 w-6 cursor-pointer object-contain"
          onClick={() => setMenuDisplay((prev) => !prev)}
        />
        <div
          className={`${
            menuDisplay ? "flex animate-slide-in" : "hidden"
          } absolute right-0 top-12 rounded-xl bg-gradient-to-r from-[#4f4b4b] to-[#11101c] px-6`}
        >
          <ul className="flex flex-col items-center justify-center ">
            {navLinks.map((item, idx) => (
              <li
                key={item.id}
                className="flex-1 cursor-pointer py-2 font-poppins text-base font-normal text-white"
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
