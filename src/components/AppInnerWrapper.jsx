import React from "react";

export const AppInnerWrapper = ({ children }) => {
  return (
    <div className='max-w-md m-4 rounded-3xl grow bg-custom-bg-inner text-zinc-50 px-4 py-8  overflow-hidden'>
      {children}
    </div>
  );
};
