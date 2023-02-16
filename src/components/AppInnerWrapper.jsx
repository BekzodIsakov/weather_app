import React from "react";

export const AppInnerWrapper = ({ children }) => {
  return (
    <div className='flex flex-col max-w-md m-4 rounded-3xl grow bg-custom-bg-inner text-zinc-50 px-4 py-8 min-h-[84vh] max-h-[90vh] overflow-hidden'>
      {children}
    </div>
  );
};
