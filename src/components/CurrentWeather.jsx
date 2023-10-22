import React, { useState } from "react";
import { Box, Icon } from "../reusable-components";
import { useQuery } from "@tanstack/react-query";
import { iconNames } from "lib/constants";
import getTimeFromUnix from "lib/utilities/getTimeFromUnix";

const Detail = ({ name, icon, data, unit }) => {
  return (
    <div className='flex flex-col items-center'>
      <Icon name={icon} width='35' />
      <div className='text-sm'>
        {data} {unit}
      </div>
      <div className='text-xs capitalize text-custom-gray-100'>{name}</div>
    </div>
  );
};

const CurrentWeather = ({ location }) => {
  const [icon, setIcon] = useState("");
  const { data: weather } = useQuery({
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

  if (weather) {
    console.log({ ...weather });
  }

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
        {icon && <Icon name={iconNames[icon] + "-a"} width='120' />}
      </div>
      <div className='mb-5'>
        <Box className={"py-3 px-5 xs:px-7 xs2:px-11"}>
          <div className='flex justify-between'>
            {weather?.sys.sunrise && (
              <Detail
                name='Sunrise'
                data={getTimeFromUnix(weather?.sys.sunrise) || 0}
                icon='sunrise'
              />
            )}
            {weather?.sys.sunset && (
              <Detail
                name='Sunset'
                data={getTimeFromUnix(weather?.sys.sunset) || 0}
                icon='sunset'
              />
            )}
            {weather?.wind.speed && (
              <Detail
                name='Wind'
                data={Math.round(weather.wind.speed) || 0}
                unit={"m/s"}
                icon='windsock'
              />
            )}
            {weather?.main.humidity && (
              <Detail
                name='Humidity'
                data={Math.round(weather.main.humidity) || 0}
                unit={"%"}
                icon='humidity'
              />
            )}
          </div>
        </Box>
      </div>
    </section>
  );
};

export default CurrentWeather;
