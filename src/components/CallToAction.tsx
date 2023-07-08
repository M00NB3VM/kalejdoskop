"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserView, MobileView } from "react-device-detect";
import axios from "axios";
import Link from "next/link";
import confetti from "canvas-confetti";

import { BsDownload } from "react-icons/bs";

import { useStoreContext } from "~/context";

function CallToAction() {
  const { darkTheme } = useStoreContext();
  const [downloaded, setDownloaded] = useState<boolean>(false);

  async function postDownload() {
    setDownloaded(true);
    confetti({
      particleCount: 50,
      spread: 360,
      startVelocity: 35,
      origin: { y: 0.3 },
    });

    try {
      const URL = process.env.NEXT_PUBLIC_API_URL;
      await axios.post(`${URL}/statistics/downloads`);
    } catch (error) {
      console.log(error);
    }
  }

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

        <BrowserView className="my-10 flex w-[80%] items-center justify-around">
          <div className="relative min-h-[200px] w-1/3 border-r-2 border-primary py-10 pr-10">
            {downloaded ? (
              <motion.div
                className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[url('/thank_you_bg.png')] bg-contain bg-center bg-no-repeat"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              >
                <p className="mx-auto max-w-[50%] text-center text-sm md:w-full lg:text-lg">
                  Tack för att du laddar ner spelet! 💜
                </p>
              </motion.div>
            ) : (
              <p className="mt-4 text-sm lg:text-lg">
                Ladda ner spelet direkt här eller hämta hem det via Steam.
                Fungerar på Windows.
              </p>
            )}
          </div>

          <div
            className={`flex h-[200px] w-[200px] items-center bg-contain ${
              darkTheme
                ? "bg-[url('/orb_black.png')]"
                : "bg-[url('/orb_white.png')]"
            }`}
          >
            <button
              onClick={postDownload}
              className="min-w-[200px] transform rounded-full bg-accent px-6 py-2 text-lg text-white shadow-md transition duration-500 hover:scale-110 hover:bg-accentHover"
            >
              <a
                href=""
                download="Namn_på_spel.exe"
                className="flex items-center justify-center"
              >
                Ladda ner <BsDownload className="ml-2 stroke-[0.7]" />
              </a>
            </button>
          </div>

          <div
            className={`flex h-[200px] w-[200px] items-center bg-contain ${
              darkTheme
                ? "bg-[url('/orb_purple.png')]"
                : "bg-[url('/orb_light_purple.png')]"
            }`}
          >
            <div className="min-w-[200px] transform rounded-full bg-accent px-6 py-2 shadow-md transition duration-500 hover:scale-110 hover:bg-accentHover ">
              <Link
                href=""
                className="inline-block w-full text-center text-lg text-white"
              >
                Gå till Steam
              </Link>
            </div>
          </div>
        </BrowserView>
        <MobileView>Mobile</MobileView>
      </div>
    </div>
  );
}

export default CallToAction;
