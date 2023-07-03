import React from "react";
import { motion } from "framer-motion";

import { useStoreContext } from "~/context";

function CallToAction() {
  const { darkTheme } = useStoreContext();

  return (
    <div className="relative">
      <div className="max-w-screen relative max-h-screen overflow-hidden">
        {darkTheme ? (
          <img
            src="/logo_layout_v5_no_text_dark.png"
            alt="Kalejdoskops tre karaktärer"
            className="-z-10 h-[100%] w-[100%]"
          />
        ) : (
          <img
            src="/logo_layout_v5_no_text.png"
            alt="Kalejdoskops tre karaktärer"
            className="-z-10 h-[100%] w-[100%]"
          />
        )}
        <motion.div
          className="absolute bottom-4 left-[50%] hidden 2xl:inline-block"
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
        >
          <img
            src="/arrow_icon_black.png"
            alt="Neråtpil"
            className=" h-[20px] w-[20px]"
          />
        </motion.div>
      </div>

      <div
        className="mt-4 flex w-full flex-col items-center md:mt-10"
        style={
          darkTheme
            ? { backgroundColor: "white", color: "#000000" }
            : { backgroundColor: "#000000", color: "white" }
        }
      >
        <h3 className="mb-4 mt-10 px-4 text-lg md:text-3xl">
          I Kalejdoskop får du leva dig in i tre ungdomars vardag. Spelet släpps
          i september!
        </h3>
        <p className="mb-10 text-xs md:text-base">
          Håll utkik här och på Steam.
        </p>
      </div>
    </div>
  );
}

export default CallToAction;
