import React from "react";
import "../custom-styles/topButton.css"
import { ScrollToTop } from "../utils/scrollTop";

const BackTopButton = () => {
  return (
    <button className="back-top-button" onClick={ScrollToTop}>
    <div className="text">
        <span>Volver</span>
        <span>al</span>
        <span>inicio</span>
    </div>
    <div className="clone">
        <span>Volver</span>
        <span>al</span>
        <span>inicio</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>
  );
};

export default BackTopButton;
