import React from "react";
import { Icon } from "./Icon";

export const DailyWeatherPanel = ({ children }) => {
  return (
    <li className='flex justify-between text-sm border-solid border-purple-50 my-3 pr-3 first:mt-0 last:mb-0'>
      <h3 className='relative py-1 cursor-pointer font-light'>{children}</h3>

      <div className='flex items-center gap-x-12'>
        <div className='flex gap-x-3'>
          <Icon name='overcast-day' width='30'/>
          <Icon name='overcast-night' width='30' />
        </div>

        <div className='flex gap-x-3'>
          <span className='text-custom-off-white'>10&#176;</span>
          <span className='text-custom-gray-50'>3&#176;</span>
        </div>
      </div>
    </li>
  );
};
