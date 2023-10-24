import React from "react";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { iconNames } from "lib/constants";

export const HourlyWeather = ({
  time = "10",
  temperature = "22",
  icon = "03n",
  ...otherProps
}) => {
  return (
    <Box
      className={"flex flex-col shrink-0 w-20 p-2 items-center gap-y-2"}
      {...otherProps}
    >
      <time className='text-xs text-custom-gray-100'>{time}</time>
      {<Icon name={iconNames[icon]} width='30' />}

      <span className='text-sm'>{temperature}&#176;</span>
    </Box>
  );
};
