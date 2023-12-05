import React from "react";

const PaginationButton = ({ click }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={click}
        className="m-10 ml-20 shadow-xl relative z-30 inline-flex items-center justify-center 
            w-auto px-8 py-3 overflow-hidden font-bold 
            text-gray-500 transition-all duration-500 border border-gray-200 
            rounded-md cursor-pointer group ease bg-gradient-to-b 
            from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white"
      >
        Siguiente
      </button>
    </div>
  );
};

export default PaginationButton;
