import React, { useEffect, useRef, useState } from "react";
import { getCurrentDate, getCurrentLocation } from "@utilities";
import { Spinner, SpriteIcon } from "@reusable-components";

export const Header = () => {
  const checkboxRef = useRef(null);
  const searchInputRef = useRef(null);
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState(null);

  console.log({ selectedLocation });
  console.log({ defaultLocation });

  const date = getCurrentDate(
    selectedLocation?.timezone || defaultLocation?.time_zone.id
  );

  let result = null;

  if (data === "loading") {
    result = <Spinner />;
  } else if (data?.length) {
    console.log(data);
    result = (
      <>
        {data.map((location) => (
          <li key={location.id} className='my-2 px-2'>
            <button
              className='block text-left w-full'
              onClick={() => {
                setSelectedLocation(location);
                setData(null);
                setSearchKey("");
              }}
            >
              <div className='text-custom-off-white text-sm'>
                {location.name}
              </div>
              <div className='text-custom-gray-100 text-xs leading-3'>
                {location.country}
              </div>
            </button>
          </li>
        ))}
      </>
    );
  } else if (data === undefined) {
    result = <div className='p-1 text-center'>Not found</div>;
  }

  useEffect(() => {
    if (!searchKey) {
      setData(null);
      return;
    }
    let ignore = false;

    async function searchData() {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${searchKey}`
        );
        const data = await response.json();
        if (ignore) return;
        setData(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    const timeOut = setTimeout(() => {
      searchData();
      setData("loading");
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(timeOut);
    };
  }, [searchKey]);

  useEffect(() => {
    const detectCurrentLocation = async () => {
      const location = await getCurrentLocation();
      if (location) {
        console.log(location);
        setDefaultLocation(location);
      }
    };

    detectCurrentLocation();
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest("#search-input-wrapper") && !searchKey) {
        checkboxRef.current.checked = false;
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [searchKey]);

  return (
    <header className='flex items-start justify-between mb-4'>
      <div>
        <h2 className='text-lg font-russo'>
          {selectedLocation
            ? selectedLocation.name
            : defaultLocation?.location.city}
        </h2>
        <div className='text-primary text-custom-gray-200'>{date}</div>
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
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          type='text'
          placeholder='Enter city'
          className='bg-custom-bg-outer peer-checked:px-1 peer-checked:mr-2 focus:mr-2 rounded-sm w-0 peer-checked:w-40 focus:w-40 duration-100'
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
