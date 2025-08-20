import React from "react";
import { iphoneDropdownData } from "./Dropdata";

const Idropdown = () => {
  return (
    <div className="bg-[#f5f5f7] text-black px-20 py-10 grid grid-cols-3 gap-10">
      {iphoneDropdownData.map((section, idx) => (
        <div key={idx} className="flex flex-col space-y-3">
         

          {/* Section Items */}
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer ${
                  i === 0
                    ? "text-2xl font-semibold hover:underline"
                    : "text-base hover:underline"
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

export default Idropdown;
