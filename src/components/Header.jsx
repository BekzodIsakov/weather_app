import React, { useEffect, useRef } from "react";
import { SpriteIcon } from "reusable-components/SpriteIcon";

export const Header = () => {
  const checkboxRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest("#search-input-wrapper")) {
        checkboxRef.current.checked = false;
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className='flex items-start justify-between mb-4'>
      <div>
        <h2 className='text-lg font-russo'>Stuttgart</h2>
        <div className='text-primary text-custom-gray-200'>
          12 September, Sunday
        </div>
      </div>
      <div
        className='flex flex-row p-1 px-2 relative items-center rounded-lg bg-custom-bg-box'
        id='search-input-wrapper'
      >
        <input
          type='checkbox'
          className='peer absolute opacity-0 -left-3'
          id='extend'
          ref={checkboxRef}
        />
        <input
          onBlur={() => (checkboxRef.current.checked = false)}
          type='text'
          placeholder='Enter city'
          className='bg-custom-bg-outer peer-checked:px-1 peer-checked:mr-2 rounded-sm w-0 peer-checked:w-40 focus:w-40 duration-100'
          ref={searchInputRef}
        />
        <label
          className='cursor-pointer'
          htmlFor='extend'
        >
          <SpriteIcon name='search-icon' width='15' height='15' />
        </label>
        <div className='relative'>
          {/* <ul className='absolute w-[207px] rounded-sm -left-1 top-7 bg-custom-bg-outer/30 backdrop-blur-sm shadow-lg'>
            <li className="pl-2 mb-2">
              <div className="text-custom-off-white text-sm">Berlin</div>
              <div className="text-custom-gray-100 text-xs leading-3">Germany</div>
            </li>
            <li className="pl-2 mb-2">
              <div className="text-custom-off-white text-sm">Tokyo</div>
              <div className="text-custom-gray-100 text-xs leading-3">Japan</div>
            </li>
            <li className="pl-2 mb-2">
              <div className="text-custom-off-white text-sm">Tashkent</div>
              <div className="text-custom-gray-100 text-xs leading-3">Uzbekistan</div>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
};
