import React, { useContext } from "react";

const ProductsLayout = ({ children }) => {

  return (
    <div className="p-1 sm:p-5 over">
      <div className="flex items-center justify-center over">
        <div className="flex-grow over">
          <div className="p-2 mt-16 sm:mt-12 lg:ml-64">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;