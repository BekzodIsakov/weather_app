import React from "react";

export const Tab = ({ children, isActive, onClick, className = "" }) => {
  let defaultStyle = " relative text-primary py-1 cursor-pointer";

  if (isActive) {
    defaultStyle += " text-custom-off-white";
  } else {
    defaultStyle += " text-custom-gray-50";
  }

  return (
    <button onClick={onClick} className={`${defaultStyle} ${className}`}>
      {children}
    </button>
  );
};
