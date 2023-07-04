import React from "react";
import { motion } from "framer-motion";
import { BrowserView, MobileView } from "react-device-detect";

import { BsDownload } from "react-icons/bs";

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
          I Kalejdoskop får du leva dig in i tre ungdomars vardag. Spela nu!
        </h3>

        <BrowserView>
          <div className="flex justify-center">
            <button className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white shadow-md transition duration-500 hover:scale-110 hover:bg-accentHover">
              <a
                href=""
                download="Namn_på_spel.exe"
                className="flex items-center"
              >
                Ladda ner <BsDownload className="ml-2 stroke-[0.7]" />
              </a>
            </button>
          </div>
        </BrowserView>
        <MobileView>Mobile</MobileView>
      </div>
    </div>
  );
}

export default CallToAction;
