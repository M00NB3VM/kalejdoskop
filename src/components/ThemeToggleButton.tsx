"use client";

import React from "react";
import { motion } from "framer-motion";

import { useStoreContext } from "~/context";

function ThemeToggleButton() {
  const { darkTheme, setDarkTheme } = useStoreContext();

  const variants = {
    light: { x: "20px" },
    dark: { x: "0" },
  };

  return (
    <div className="absolute top-[15px] right-[15px]">
      <button
        className="h-[22px] w-[42px] rounded-full bg-primary"
        onClick={() => {
          setDarkTheme((darkTheme) => !darkTheme);
        }}
      >
        <div className="flex justify-between">
          <img
            src="/moon_icon.png"
            className="ml-1 h-[15px] w-[15px]"
            alt="moon"
          />
          <img
            src="/sun_icon.png"
            className="mr-1 h-[15px] w-[15px]"
            alt="sun"
          />
        </div>
        <motion.div
          initial={darkTheme ? "dark" : "light"}
          animate={darkTheme ? "dark" : "light"}
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="absolute top-[2px] left-0"
        >
          <div className="mx-[2px] h-[18px] w-[18px] rounded-full bg-secondary"></div>
        </motion.div>
      </button>
    </div>
  );
}

export default ThemeToggleButton;
