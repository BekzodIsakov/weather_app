import React from "react";
import { SVG } from "../reusable-components/SVG";

export const MaxTemperature = () => {
  return (
    <section className='p-2.5 flex justify-between mb-2'>
      <div>
        <h1 className='text-5xl font-russo'>18&#176;</h1>
        <div className='text-primary capitalize text-custom-gray-200'>
          thunderstorm
        </div>
      </div>
      <div>
        <SVG
          iconName={"day-cloudy"}
          className='fill-amber-400'
          size={"large"}
        />
      </div>
    </section>
  );
};
