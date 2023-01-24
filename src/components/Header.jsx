import React from "react";

export const Header = () => {
  return (
    <header className='flex justify-between mb-4'>
      <div>
        <h2 className='text-lg font-russo'>Stuttgart</h2>
        <div className='text-primary text-custom-gray-200'>
          12 September, Sunday
        </div>
      </div>
      <div className='w-[30px] h-[30px] rounded-lg bg-custom-bg-box'></div>
    </header>
  );
};
