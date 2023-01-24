import React from "react";

export const Box = ({ children, className }) => {
  return (
    <div className={`bg-custom-bg-box rounded-2xl ${className}`}>
      {children}
    </div>
  );
};
