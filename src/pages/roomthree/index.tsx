"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";

import { SlGameController } from "react-icons/sl";
import { GiMirrorMirror } from "react-icons/Gi";
import { RiBearSmileLine } from "react-icons/Ri";
import { BsDoorClosed } from "react-icons/Bs"
import { FiMonitor } from "react-icons/fi";

import PolkaComputer from "./components/PolkaComputer";
import PolkaGameConsole from "./components/PolkaGameConsole";
import PolkaMirror from "./components/PolkaMirror";
import PolkaPlushy from "./components/PolkaPlushy";
import PolkaWardrobe from "./components/PolkaWardrobe";

function Roomthree() {
  /*const [showModal, setShowModal] = useState<boolean>(false);

  const [showObjectOne, setShowObjectOne] = useState<boolean>(false);

  function closeModal(): void {
    setShowModal(!showModal);
  }
*/
  const [showObjectOne, setShowObjectOne] = useState<boolean>(false);

  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);

  const [showGiftModal, setShowGiftModal] = useState<boolean>(false);
  const [showGameConsoleModal, setShowGameConsoleModal] =
    useState<boolean>(false);
  const [showMirrorModal, setShowMirrorModal] = useState<boolean>(false);
  const [showPlushyModal, setShowPlushyModal] = useState<boolean>(false);
  const [showWardrobeModal, setShowWardrobeModal] = useState<boolean>(false);
  const [showComputerModal, setShowComputerModal] = useState<boolean>(false);

  function closeOrganizationModal(): void {
    setShowOrganizationModal(!showOrganizationModal);
  }
  /*
  <SlGameController
  color="yellow"
  size={60}
  strokeWidth={2}
  className="drop-shadow-[2px_-2px_4px_#00ffc8]"
/>*/

  return (
    <motion.div
      className="relative m-0 min-h-screen p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/"
        className="absolute top-0 left-0 z-30 mt-2 ml-4 h-[80px] w-[40px] cursor-pointer text-center text-white"
      >
        <img
          src="/Char3_Door_mini.png"
          alt="Hem"
          className="max-h-full max-w-full"
        />
        <p>Exit</p>
      </Link>

      <OrganizationInfoTab />
      <RoomNav />
      <div className="relative h-screen min-w-min overflow-visible overflow-x-auto bg-[#000]">
        <div className="absolute h-full min-w-min xl:left-[50%] xl:-translate-x-[50%] xl:transform">
          <div
            className="absolute top-[28%] left-[35%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowMirrorModal(!showMirrorModal);
            }}
          >
            <GiMirrorMirror
              color="yellow"
              size={90}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute top-[48%] left-[32%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowGameConsoleModal(!showGameConsoleModal);
            }}
          >
            <SlGameController
              color="yellow"
              size={60}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute bottom-[22%] left-[44%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowPlushyModal(!showPlushyModal);
            }}
          >
            <RiBearSmileLine
              color="yellow"
              size={50}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute top-[22%] right-[50%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowWardrobeModal(!showWardrobeModal);
            }}
          >
            <BsDoorClosed
              color="yellow"
              size={60}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>


          <div
            className="absolute top-[32%] right-[30%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowWardrobeModal(!showWardrobeModal);
            }}
          >
            <FiMonitor
              color="yellow"
              size={60}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>


          <img
            src="/Char3_Room.png"
            className="-z-50 mx-auto max-h-full max-w-none"
          />

          <PolkaComputer
            showObject={showComputerModal}
            setShowObject={setShowComputerModal}
          />
          <PolkaGameConsole
            showObject={showGameConsoleModal}
            setShowObject={setShowGameConsoleModal}
          />
          <PolkaMirror
            showObject={showMirrorModal}
            setShowObject={setShowMirrorModal}
          />
          <PolkaPlushy
            showObject={showPlushyModal}
            setShowObject={setShowPlushyModal}
          />
          <PolkaWardrobe
            showObject={showWardrobeModal}
            setShowObject={setShowWardrobeModal}
          />
         

          <div className="absolute right-0 top-[45%] z-50 md:hidden">
            <p
              onClick={() => {
                setShowOrganizationModal(true);
              }}
              className="inline-block origin-bottom-right -rotate-90 cursor-pointer rounded-t-lg bg-secondary px-[20px] py-1 text-xl font-bold tracking-wider text-accent"
            >
              Läs&nbsp;mig
            </p>
          </div>
        </div>

        {showOrganizationModal ? (
          <OrganizationInfoModal closeModal={closeOrganizationModal} />
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  );
}
export default Roomthree;
