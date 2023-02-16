import React from "react";
import { motion } from "framer-motion";

export const TabPanel = ({ children, className = "", ...otherProps }) => {
  return (
    <motion.ul
      className={`w-full min-h-[100px] select-none ${className}`}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      {...otherProps}
    >
      {children}
    </motion.ul>
  );
};
