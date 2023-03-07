import React from "react";
import { Icon } from "@reusable-components";

export const MaxTemperature = () => {
  return (
    <section className='flex justify-between items-center mb-2 p-2.5'>
      <div>
        <h1 className='text-5xl font-russo'>18&#176;</h1>
        <div className='text-primary capitalize text-custom-gray-200'>
          thunderstorm
        </div>
      </div>
      <Icon name='animated/overcast-day' width='120' />
    </section>
  );
};
