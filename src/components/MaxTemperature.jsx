import React from "react";
import { ReactComponent as WeatherIcon } from "../assets/icons/thunderstorms-day-snow.svg";
import { ReactComponent as Icon } from "../assets/icons/hail.svg";
import { HailComponent } from "../reusable-components/HailComponent";

export const MaxTemperature = () => {
  return (
    <section className='flex justify-between items-center mb-2 p-2.5'>
      <div>
        <h1 className='text-5xl font-russo'>18&#176;</h1>
        <div className='text-primary capitalize text-custom-gray-200'>
          thunderstorm
        </div>
      </div>

      <HailComponent />

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        <defs>
          <linearGradient
            id='a'
            x1='26.75'
            x2='37.25'
            y1='22.91'
            y2='41.09'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stop-color='#fbbf24' />
            <stop offset='.45' stop-color='#fbbf24' />
            <stop offset='1' stop-color='#f59e0b' />
          </linearGradient>
        </defs>
        <circle
          cx='32'
          cy='32'
          r='10.5'
          fill='url(#a)'
          stroke='#f8af18'
          stroke-miterlimit='10'
          stroke-width='.5'
        />
        <path
          fill='none'
          stroke='#fbbf24'
          stroke-linecap='round'
          stroke-miterlimit='10'
          stroke-width='3'
          d='M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21'
        >
          <animateTransform
            attributeName='transform'
            dur='45s'
            repeatCount='indefinite'
            type='rotate'
            values='0 32 32; 360 32 32'
          />
        </path>
      </svg>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        <defs>
          <linearGradient
            id='a'
            x1='26.75'
            x2='37.25'
            y1='22.91'
            y2='41.09'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stop-color='#fbbf24' />
            <stop offset='.45' stop-color='#fbbf24' />
            <stop offset='1' stop-color='#f59e0b' />
          </linearGradient>
        </defs>
        <circle
          cx='32'
          cy='32'
          r='10.5'
          fill='url(#a)'
          stroke='#f8af18'
          stroke-miterlimit='10'
          stroke-width='.5'
        />
        <path
          fill='none'
          stroke='#fbbf24'
          stroke-linecap='round'
          stroke-miterlimit='10'
          stroke-width='3'
          d='M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21'
        >
          <animateTransform
            attributeName='transform'
            dur='45s'
            repeatCount='indefinite'
            type='rotate'
            values='0 32 32; 360 32 32'
          />
        </path>
      </svg>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        <defs>
          <linearGradient
            id='a'
            x1='16.5'
            x2='21.5'
            y1='19.67'
            y2='28.33'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stop-color='#fbbf24' />
            <stop offset='.45' stop-color='#fbbf24' />
            <stop offset='1' stop-color='#f59e0b' />
          </linearGradient>
          <linearGradient
            id='b'
            x1='40.76'
            x2='50.83'
            y1='23'
            y2='40.46'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' stop-color='#9ca3af' />
            <stop offset='.45' stop-color='#9ca3af' />
            <stop offset='1' stop-color='#6b7280' />
          </linearGradient>
          <linearGradient
            id='c'
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
        </defs>
        <circle
          cx='19'
          cy='24'
          r='5'
          fill='url(#a)'
          stroke='#f8af18'
          stroke-miterlimit='10'
          stroke-width='.5'
        />
        <path
          fill='none'
          stroke='#fbbf24'
          stroke-linecap='round'
          stroke-miterlimit='10'
          stroke-width='2'
          d='M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17'
        >
          <animateTransform
            attributeName='transform'
            dur='45s'
            repeatCount='indefinite'
            type='rotate'
            values='0 19 24; 360 19 24'
          />
        </path>
        <path
          fill='url(#b)'
          stroke='#848b98'
          stroke-miterlimit='10'
          stroke-width='.5'
          d='M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z'
        >
          <animateTransform
            attributeName='transform'
            dur='7s'
            repeatCount='indefinite'
            type='translate'
            values='-2.1 0; 2.1 0; -2.1 0'
          />
        </path>
        <path
          fill='url(#c)'
          stroke='#e6effc'
          stroke-miterlimit='10'
          stroke-width='.5'
          d='M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z'
        >
          <animateTransform
            attributeName='transform'
            dur='7s'
            repeatCount='indefinite'
            type='translate'
            values='-3 0; 3 0; -3 0'
          />
        </path>
      </svg>

      {/* <WeatherIcon style={{ width: "120px" }} /> */}
    </section>
  );
};
