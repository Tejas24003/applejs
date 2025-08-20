import React, { useState } from "react";
import { appleImg, bagImg, searchImg, menuright } from "../utils";
import Dropdown from "./Dropdown";
import Mdropdown from "./Mdropdown";

import { navLists } from "../constants";
import Idropdown from "./Idropdown";
import Sdropdown from "./Sdropdown";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // "store" | "mac" | null

  return (
    <header className="w-full py-4 sm:px-10 px-5 flex justify-center items-center relative">
      <nav className="flex w-full screen-max-width">
        {/* Apple Logo */}
        <img src={appleImg} alt="apple" width={14} height={18} />

        {/* Center Navigation */}
        <div className="flex flex-1 justify-center max-sm:hidden space-x-5">
          {navLists.map((nav) => {
            const navText = nav.trim().toLowerCase();

            return (
              <div
                key={nav}
                className="relative"
                onMouseEnter={() => setActiveDropdown(navText)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="px-5 cursor-pointer text-gray-600 hover:text-white transition-all">
                  {nav}
                </div>

                {/* Dropdowns */}
                {activeDropdown === "store" && (
                  <div
                    className="fixed left-0 w-screen bg-black/90 z-50"
                    onMouseEnter={() => setActiveDropdown("store")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Dropdown />
                  </div>
                )}

                {activeDropdown === "mac" && (
                  <div
                    className="fixed left-0 w-screen bg-black/90 z-50"
                    onMouseEnter={() => setActiveDropdown("mac")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Mdropdown />
                  </div>
                )}
                    {activeDropdown === "iphone" && (
                  <div
                    className="fixed left-0 w-screen bg-black/90 z-50"
                    onMouseEnter={() => setActiveDropdown("iphone")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Idropdown/>
                  </div>
                )}
                   {activeDropdown === "support" && (
                  <div
                    className="fixed left-0 w-screen bg-black/90 z-50"
                    onMouseEnter={() => setActiveDropdown("support")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Sdropdown/>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={menuright}
            alt="menu"
            width={18}
            height={18}
            className="cursor-pointer lg:hidden md:hidden sm:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
