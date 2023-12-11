import React, { useContext, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

const LupaIcon = ({ product }) => {
  return (
    <Link to={`/product/comparation/${product.id}`}>
      <div>XD</div>
    </Link>
  );
};

export default LupaIcon;
