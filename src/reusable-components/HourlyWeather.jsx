import React from "react";
import { Box } from "./Box";
import { Icon } from "./Icon";

export const HourlyWeather = ({ time, temperature, state, ...otherProps }) => {
  return (
    <Box
      className={"flex flex-col shrink-0 w-20 p-2 items-center gap-y-2"}
      {...otherProps}
    >
      <time className='text-xs text-custom-gray-100'>10 am</time>
      {<Icon name='overcast-day' width='30' />}

      <span className='text-sm'>10&#176;</span>
    </Box>
  );
};
