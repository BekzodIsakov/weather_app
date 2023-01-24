import React from "react";
import { Box } from "./Box";
import { SVG } from "./SVG";

export const HourlyWeather = ({ time, temperature, state }) => {
  return (
    <Box className={"flex flex-col shrink-0 w-20 p-2 items-center gap-y-2"}>
      <time className='text-xs text-custom-gray-100'>10 am</time>
      <SVG iconName={"day-sunny"} className='fill-amber-400' />
      <span className='text-sm'>10&#176;</span>
    </Box>
  );
};
