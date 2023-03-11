import { Spinner } from "@reusable-components";
import React, { useEffect, useRef, useState } from "react";
import { SpriteIcon } from "reusable-components/SpriteIcon";

export const Header = () => {
  const checkboxRef = useRef(null);
  const searchInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  let result = null;

  if (data === "loading") {
    result = <Spinner />;
  } else if (data?.length) {
    result = (
      <>
        {data.map((city) => (
          <li key={city.id} className='pl-2 mb-2'>
            <div className='text-custom-off-white text-sm'>{city.name}</div>
            <div className='text-custom-gray-100 text-xs leading-3'>
              {city.country}
            </div>
          </li>
        ))}
      </>
    );
  } else if (data === undefined) {
    result = <div className='p-1 text-center'>Not found</div>;
  }

  useEffect(() => {
    if (!search) {
      setData(null);
      return;
    }
    let ignore = false;

    async function searchdata() {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${search}`
        );
        const data = await response.json();
        if (ignore) return;
        setData(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    const timeOut = setTimeout(() => {
      searchdata();
      setData("loading");
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(timeOut);
    };
  }, [search]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest("#search-input-wrapper") && !search) {
        checkboxRef.current.checked = false;
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [search]);

  return (
    <header className='flex items-start justify-between mb-4'>
      <div>
        <h2 className='text-lg font-russo'>{"city"}</h2>
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Enter city'
          className='bg-custom-bg-outer peer-checked:px-1 peer-checked:mr-2 rounded-sm w-0 peer-checked:w-40 focus:w-40 duration-100'
          ref={searchInputRef}
        />
        <label className='cursor-pointer' htmlFor='extend'>
          <SpriteIcon name='search-icon' width='15' height='15' />
        </label>
        <ul className='absolute z-10 w-full rounded-md left-0 top-[100%] border-t-2 border-t-custom-bg-inner bg-custom-bg-outer/30 backdrop-blur-sm shadow-lg'>
          {result}
        </ul>
      </div>
    </header>
  );
};
