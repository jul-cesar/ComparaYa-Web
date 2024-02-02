import React from "react";

const ProductSkeleton = () => {
  return Array.from({ length: 50 }, (_, index) => (
    <div className="flex min-h-full items-center justify-center p-4 mt-6" key={index}>
      <div className="w-full">
        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
          <div className="h-64 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
            <div className="h-2 bg-gray-300 w-full mb-2"></div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
            <div className="h-2 bg-gray-300 w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProductSkeleton;