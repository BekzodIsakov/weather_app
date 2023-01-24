import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Tab } from "../reusable-components/Tab";
import { TabPanel } from "../reusable-components/TabPanel";
import { HourlyWeather } from "../reusable-components/HourlyWeather";

const TABS = ["Today", "Tomorrow", "Next 10 days"];

export const WeatherTabs = () => {
  const [activeTabIdx, setActiveTabIdx] = React.useState(0);

  return (
    <div>
      <div className='flex gap-x-5'>
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
      <div className='mt-5'>
        <AnimatePresence mode='wait'>
          {activeTabIdx === 0 ? (
            <TabPanel key={0}>
              <div className='flex flex-row gap-x-2.5 overflow-auto scrollbar-hide'>
                {Array(7)
                  .fill(true)
                  .map((_, idx) => (
                    <HourlyWeather key={idx} />
                  ))}
              </div>
            </TabPanel>
          ) : activeTabIdx === 1 ? (
            <TabPanel key={1}>
              <div className='flex flex-row gap-x-2.5 overflow-auto scrollbar-hide'>
                {Array(7)
                  .fill(true)
                  .map((_, idx) => (
                    <HourlyWeather key={idx} />
                  ))}
              </div>
            </TabPanel>
          ) : (
            <TabPanel key={2}>Next 10 days</TabPanel>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
