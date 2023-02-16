import React from "react";
import { SVG } from "./SVG";
import { ReactComponent as Icon } from "../assets/icons/overcast-day.svg";
import { ReactComponent as WeatherIcon } from "../assets/icons/overcast-night.svg";

export const DailyWeatherPanel = ({ children }) => {
  return (
    <li className='flex justify-between text-sm border-solid border-purple-50 my-3 pr-3 first:mt-0 last:mb-0'>
      <h3 className='relative py-1 cursor-pointer font-light'>{children}</h3>
      {/* <div className='flex items-center'>
        <SVG iconName={"day-windy"} className='fill-indigo-500 mb-1' />
        <span className='text-custom-gray-50'>97 %</span>
      </div> */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 64 64'
        style={{ width: "30px" }}
      >
        <defs>
          <linearGradient
            id='b'
            x1='22.56'
            x2='39.2'
            y1='21.96'
            y2='50.8'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stop-color='#f3f7fe' />
            <stop offset='.45' stop-color='#f3f7fe' />
            <stop offset='1' stop-color='#deeafb' />
          </linearGradient>
          <linearGradient
            id='a'
            x1='23.25'
            x2='24.75'
            y1='43.7'
            y2='46.3'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stop-color='#86c3db' />
            <stop offset='.45' stop-color='#86c3db' />
            <stop offset='1' stop-color='#5eafcf' />
          </linearGradient>
          <linearGradient
            id='c'
            x1='30.25'
            x2='31.75'
            y1='43.7'
            y2='46.3'
            xlinkHref='#a'
          />
          <linearGradient
            id='d'
            x1='37.25'
            x2='38.75'
            y1='43.7'
            y2='46.3'
            xlinkHref='#a'
          />
        </defs>
        <path
          fill='url(#c)'
          stroke='#e6effc'
          stroke-miterlimit='10'
          stroke-width='.5'
          d='M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z'
        />
        <path
          fill='url(#a)'
          d='M24 43.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z'
        >
          <animateTransform
            attributeName='transform'
            dur='0.6s'
            repeatCount='indefinite'
            type='translate'
            values='1 -5; -2 18; -4 14'
          />
          <animate
            attributeName='opacity'
            dur='0.6s'
            repeatCount='indefinite'
            values='1;1;0'
          />
        </path>
        <path
          fill='url(#c)'
          d='M31 43.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z'
        >
          <animateTransform
            attributeName='transform'
            begin='-0.4s'
            dur='0.6s'
            repeatCount='indefinite'
            type='translate'
            values='1 -5; -2 18; -4 14'
          />
          <animate
            attributeName='opacity'
            begin='-0.4s'
            dur='0.6s'
            repeatCount='indefinite'
            values='1;1;0'
          />
        </path>
        <path
          fill='url(#d)'
          d='M38 43.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z'
        >
          <animateTransform
            attributeName='transform'
            begin='-0.2s'
            dur='0.6s'
            repeatCount='indefinite'
            type='translate'
            values='1 -5; -2 18; -4 14'
          />
          <animate
            attributeName='opacity'
            begin='-0.2s'
            dur='0.6s'
            repeatCount='indefinite'
            values='1;1;0'
          />
        </path>
      </svg>

      <div className='flex items-center gap-x-8'>
        <div className='flex gap-x-3'>
          {/* <SVG
            iconName={"weather-icon"}
            className='fill-custom-off-white mb-1'
          /> */}
          <SVG
            iconName={"night-cloudy-gusts"}
            className='fill-custom-gray-50 mb-1'
          />
        </div>

        <div className='flex gap-x-3'>
          <span className='text-custom-off-white'>10&#176;</span>
          <span className='text-custom-gray-50'>3&#176;</span>
        </div>
      </div>
    </li>
  );
};
