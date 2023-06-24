"use client";
import React from "react";
import { useState } from "react";
import { HiXMark, HiBars3 } from "react-icons/hi2";
const headerList = [
  {
    id: 1,
    title: "Home",
    link: "about",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Skills",
    link: "skills",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "portfolio",
  },
  {
    id: 5,
    title: "Contact",
    link: "contact",
  },
];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-2xl font-semibold"> Nouelle Caparas</h1>
      <ul className=" hidden md:flex">
        {headerList.map((item) => (
          <li key={item.id} className="p-4">
            {" "}
            {item.title}
          </li>
        ))}
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <HiXMark size={25} /> : <HiBars3 size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-page-bg ease-in-out duration-500"
            : "fixed left-[-100%] block md:hidden"
        }
      >
        <h1 className="w-full text-2xl font-semibold m-4"> Nouelle Caparas</h1>
        <ul className="pt-12 uppercase p-4">
          {headerList.map((item) => (
            <li key={item.id} className="p-4 border-b border-gray-600">
              {" "}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
