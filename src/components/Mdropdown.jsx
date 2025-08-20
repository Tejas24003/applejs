import React from "react";
import { macDropdownData } from "./Dropdata";

const Mdropdown = () => {
  return (
    <div className="absolute left-0  w-full bg-white shadow-md border-t z-10 border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 px-12 py-10">
        {macDropdownData.map((section, index) => (
          <div key={index}>
            
            <ul className="space-y-3">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-sm text-black cursor-pointer ${
                    idx === 0 ? "font-semibold text-lg" : " text-gray-700 hover:underline"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mdropdown;
