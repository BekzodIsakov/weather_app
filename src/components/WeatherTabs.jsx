import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HourlyWeather,
  DailyWeatherPanel,
  Tab,
  TabPanel,
} from "../reusable-components";

const TABS = ["Today", "Tomorrow", "Next 10 days"];
const VARIANTS = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 24 },
  },
};

const WeatherTabs = () => {
  const [activeTabIdx, setActiveTabIdx] = React.useState(2);

  return (
    <div className='flex flex-col overflow-auto '>
      <div className='flex gap-x-5 p-0.5'>
        {TABS.map((tab, idx) => (
          <Tab
            key={tab}
            isActive={activeTabIdx === idx}
            onClick={() => setActiveTabIdx(idx)}
          >
            {tab}
            {activeTabIdx === idx && (
              <motion.div className='underdot' layoutId='underdot' />
            )}
          </Tab>
        ))}
      </div>
      <div className='mt-5 overflow-auto'>
        <AnimatePresence mode='wait'>
          {activeTabIdx === 0 ? (
            <TabPanel key={0}>
              {/* <motion.div
                className='flex flex-row gap-x-2.5 overflow-auto pb-2 scrollbar'
                animate={activeTabIdx === 0 ? "open" : "closed"}
                variants={{
                  open: {
                    transition: {
                      delayChildren: 0,
                      staggerChildren: 0.1,
                    },
                  },
                }}
              > */}
              <div className='flex flex-row gap-x-2.5 overflow-auto pb-2 scrollbar'>
                {Array(7)
                  .fill(true)
                  .map((_, idx) => (
                    <motion.li
                      key={idx}
                      // initial={{ x: 230, opacity: 0.2 }}
                      variants={VARIANTS}
                    >
                      <HourlyWeather />
                    </motion.li>
                  ))}
              </div>
              {/* </motion.div> */}
            </TabPanel>
          ) : activeTabIdx === 1 ? (
            <TabPanel key={1}>
              {/* <motion.div
                className='flex flex-row gap-x-2.5 overflow-auto pb-2 scrollbar'
                animate={activeTabIdx === 1 ? "open" : "closed"}
                variants={{
                  open: {
                    transition: {
                      delayChildren: 0,
                      staggerChildren: 0.1,
                    },
                  },
                }}
              > */}
              <div className='flex flex-row gap-x-2.5 overflow-auto pb-2 scrollbar'>
                {Array(8)
                  .fill(true)
                  .map((_, idx) => (
                    <motion.li
                      key={idx}
                      // initial={{ x: 230, opacity: 0.2 }}
                      variants={VARIANTS}
                    >
                      <HourlyWeather />
                    </motion.li>
                  ))}
                {/* </motion.div> */}
              </div>
            </TabPanel>
          ) : (
            <TabPanel key={2} className='mt-1 scrollbar'>
              <DailyWeatherPanel>Today</DailyWeatherPanel>
              <DailyWeatherPanel>Friday</DailyWeatherPanel>
              <DailyWeatherPanel>Saturday</DailyWeatherPanel>
              <DailyWeatherPanel>Sunday</DailyWeatherPanel>
              <DailyWeatherPanel>Monday</DailyWeatherPanel>
              <DailyWeatherPanel>Tuesday</DailyWeatherPanel>
              <DailyWeatherPanel>Wednesday</DailyWeatherPanel>
              <DailyWeatherPanel>Thursday</DailyWeatherPanel>
            </TabPanel>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeatherTabs;
