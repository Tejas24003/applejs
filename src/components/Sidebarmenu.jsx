import React from "react";

const menuItems = [
  "Store",
  "Mac",
  "iPhone",
  "Support",
];

const SidebarMenu = () => {
  return (
    <nav className="bg-[#f5f5f7]  fixed top-0 left-0 w-full h-full p-6">
      <ul className="space-y-4 absolute left-15 top-20">

        {menuItems.map((item, index) => (
          <li
            key={index}
            className="text-3xl font-semibold text-gray-800 cursor-pointer hover:underline"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
