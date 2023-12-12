import React, { useContext, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

const LupaIcon = ({ product }) => {
  return (
    <Link reloadDocument to={`/product/comparation/${product.id}`}>
      <div className="my-2 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-[45px] w-[30px]  sm:h-[42px]  sm:w-[42px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      </div>
    </Link>
  );
};

export default LupaIcon;
