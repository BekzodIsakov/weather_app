import React from "react";
import { Box, SVG } from "../reusable-components";
import { ReactComponent as HumidityIcon } from "../assets/icons/humidity.svg";

const DETAILS = [
  { type: "wind", data: "10 m/s" },
  { type: "humidity", data: "98%" },
  { type: "umbrella", data: "100%" },
];

const Detail = ({ type, data }) => {
  return (
    <div className='flex flex-col items-center'>
      {/* <SVG iconName={type} className='fill-indigo-500 mb-1' /> */}
      <HumidityIcon />
      <div className='text-sm'>{data}</div>
      <div className='text-xs capitalize text-custom-gray-100'>{type}</div>
    </div>
  );
};

export const CurrentWeatherDetails = () => {
  return (
    <section className='mb-5'>
      <Box className={"py-3 px-5 xs:px-7 xs2:px-11"}>
        <div className='flex justify-between'>
          {DETAILS.map((detail, idx) => (
            <Detail key={idx} type={detail.type} data={detail.data} />
          ))}
        </div>
      </Box>
    </section>
  );
};
