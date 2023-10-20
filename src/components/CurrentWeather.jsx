import React from "react";
import { Box, Icon } from "../reusable-components";
import { useQuery } from "@tanstack/react-query";

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
  const current_weather = useQuery({
    queryKey: ["current_weather", location],
    queryFn: async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.lat}&lon=${location.coords.lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      );

      if (!response.ok) {
        throw new Error("Reponse was not ok");
      }

      const data = await response.json();
      return data;
    },
    enabled: !!location,
  });

  console.log({ location });
  console.log({ current_weather: current_weather.data });

  return (
    <section className='mb-5'>
      <Box className={"py-3 px-5 xs:px-7 xs2:px-11"}>
        <div className='flex justify-between'>
          {DETAILS.map((detail, idx) => (
            <Detail
              key={idx}
              type={detail.type}
              data={detail.data}
              icon={detail.iconName}
            />
          ))}
        </div>
      </Box>
    </section>
  );
};

export default CurrentWeather;
