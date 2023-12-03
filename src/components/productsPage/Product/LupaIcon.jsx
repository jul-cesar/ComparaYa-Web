import React, { useEffect, useRef } from "react";

import lupa from "../../../media/lupa2.json";
import Lottie from "lottie-react";

const LupaIcon = () => {
  return (
    <div>
      <a
        href="#"
        className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center"
      >
        <Lottie animationData={lupa} className="h-[70px] w-[70px]" />
      </a>
    </div>
  );
};

export default LupaIcon;
