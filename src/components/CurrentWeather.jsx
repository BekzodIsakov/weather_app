import React, { useState } from "react";
import { Box, Icon } from "../reusable-components";
import { useQuery } from "@tanstack/react-query";
import { iconNames } from "lib/constants";

const DETAILS = [
  { type: "wind", iconName: "windsock", data: "10 m/s" },
  { type: "humidity", iconName: "humidity", data: "98%" },
  { type: "precipitation", iconName: "umbrella", data: "100%" },
];

const Detail = ({ type, icon, data }) => {
  return (
    <div className='flex flex-col items-center'>
      <Icon name={icon} width='35' />
      <div className='text-sm'>{data}</div>
      <div className='text-xs capitalize text-custom-gray-100'>{type}</div>
    </div>
  );
};

const CurrentWeather = ({ location }) => {
  const [icon, setIcon] = useState("");
  const {
    isPending,
    isError,
    error,
    data: weather,
  } = useQuery({
    queryKey: ["current_weather", location],
    queryFn: async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.lat}&lon=${location.coords.lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      );

      if (!response.ok) {
        throw new Error("Reponse was not ok");
      }

      const data = await response.json();

      setIcon(data.weather[0].icon);
      return data;
    },
    enabled: !!location,
  });

  console.log({ weather });

  return (
    <section>
      <div className='flex justify-between items-center mb-2 p-2.5'>
        <div>
          <h2 className='text-5xl font-russo'>
            {weather?.main.temp && Math.round(weather.main.temp)}&#176;
          </h2>
          <p>
            Feels like:{" "}
            {weather?.main.feels_like && Math.round(weather.main.feels_like)}
            &#176;
          </p>
          <div className='text-primary capitalize text-gray-400'>
            {weather?.weather[0].main}
          </div>
        </div>
        {/* <Icon name={weather?.weather[0].icon} width='120' /> */}
        {icon && <Icon name={iconNames[icon] + "-a"} width='120' />}
      </div>
      <div className='mb-5'>
        <Box className={"py-3 px-5 xs:px-7 xs2:px-11"}>
          <div className='flex justify-between'>
            {/* {DETAILS.map((detail, idx) => (
              <Detail
                key={idx}
                type={detail.type}
                data={detail.data}
                icon={detail.iconName}
              />
            ))} */}
          </div>
        </Box>
      </div>
    </section>
  );
};

export default CurrentWeather;
