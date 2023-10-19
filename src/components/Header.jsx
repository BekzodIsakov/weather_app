import React, { useEffect, useRef, useState } from "react";
import { getCurrentDate } from "lib/utilities";
import { Spinner, SpriteIcon } from "@reusable-components";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "lib/hooks/useDebounce";

function useSearch(search) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`;
  return useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      if (!search || search.length === 1) {
        return [];
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network repsonse was not ok");
      }

      const data = await response.json();
      return data;
    },
  });
}

export const Header = () => {
  const [locationName, setLocationName] = useState("");

  const search = useDebounce(locationName, 300);
  const { isFetching, isError, data, error } = useSearch(search);

  const checkboxRef = useRef(null);
  const searchInputRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState(null);

  const date = getCurrentDate(
    selectedLocation?.timezone || defaultLocation?.time_zone.id
  );

  let content = null;

  if (isFetching) {
    content = <Spinner />;
  } else if (isError) {
    console.error(error);
    content = <div className='px-2 text-red-500'>{error.message}</div>;
  } else if (data) {
    content = (
      <>
        {data.map((location, i) => (
          <li key={i} className='my-2 px-2'>
            <button
              className='block text-left w-full'
              onClick={() => {
                setSelectedLocation(location);
                setLocationName("");
              }}
            >
              <div className='text-custom-off-white text-sm'>
                {location.name}
              </div>
              <div className='text-custom-gray-100 text-xs leading-3'>
                {location.state} {location.state && "/"} {location.country}
              </div>
            </button>
          </li>
        ))}
      </>
    );
  }

  useEffect(() => {
    const detectCurrentLocation = async () => {
      const res = await fetch(
        `https://api.ipregistry.co/?key=${process.env.env.REACT_APP_IP_REGISTRY_KEY}`
      );
      const location = await res.json();
      if (location) {
        setDefaultLocation(location);
      }
    };

    detectCurrentLocation();
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest("#search-input-wrapper") && !locationName) {
        checkboxRef.current.checked = false;
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [locationName]);

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
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          type='text'
          placeholder='Enter city'
          className='bg-custom-bg-outer peer-checked:px-1 peer-checked:mr-2 focus:px-1 focus:mr-2 rounded-sm w-0 peer-checked:w-40 focus:w-40 duration-100'
          ref={searchInputRef}
        />
        <label className='cursor-pointer' htmlFor='extend'>
          <SpriteIcon name='search-icon' width='15' height='15' />
        </label>
        <ul className='absolute z-10 w-full rounded-md left-0 top-[100%] border-t-2 border-t-custom-bg-inner bg-custom-bg-outer/30 backdrop-blur-sm shadow-lg'>
          {content}
        </ul>
      </div>
    </header>
  );
};
