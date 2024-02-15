import React from "react";

const SidebarOption = ({ clicked, text, svg, productsInCart }) => {
  return (
    <li>
      <a
        onClick={clicked}
        className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
      >
     
        <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
          {productsInCart.length}
        </span>
      </a>
    </li>
  );
};

export default SidebarOption;
