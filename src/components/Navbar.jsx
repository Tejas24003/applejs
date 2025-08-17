import React from "react";
import { appleImg, bagImg, searchImg, menuright } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-4 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />
       <div className="flex flex-1 justify-center max-sm:hidden space-x-5">
  {navLists.map((nav) => (
    <div 
      key={nav} 
      className="px-5 cursor-pointer text-gray-600 hover:text-white transition-all"
    >
      {nav}
    </div>
  ))}
</div>

        <div className="flex items-center gap-7  max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer"/>

          <img src={bagImg} alt="bag" width={18} height={18} className="cursor-pointer"/>
          <img src={menuright} alt="bag" width={18} height={18} className="cursor-pointer lg:hidden md:hidden  "/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
