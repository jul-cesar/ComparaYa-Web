import React from "react";

const SidebarOption = ({clicked, text, svg, productsInCart}) => {
  return (
    <li>
      <a
        onClick={clicked}
        className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <svg
          className="flex-shrink-0 w-5  h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 21"
        >
          <path d={svg} />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {productsInCart.length}
        </span>
      </a>
    </li>
  );
};

export default SidebarOption;
