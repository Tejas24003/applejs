import React from "react";
import { supportDropdownData } from "./Dropdata"; 

const Sdropdown = () => {
  return (
    <div className="bg-[#f5f5f7] text-black px-20 py-10 grid grid-cols-3 gap-10">
      {supportDropdownData.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col space-y-3">
          <h4 className="text-gray-500 text-sm font-medium">{col.title}</h4>
          <ul className="space-y-2">
            {col.items.map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer hover:underline ${
                  col.title === "Explore Support" && i !== col.items.length - 1
                    ? "text-2xl font-semibold"
                    : "text-base"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sdropdown;
