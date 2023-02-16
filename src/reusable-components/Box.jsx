import React from "react";

export const Box = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={`bg-custom-bg-box rounded-2xl ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};
