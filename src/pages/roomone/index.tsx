"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FiMonitor, FiImage, FiGift } from "react-icons/fi";
import { SlGameController } from "react-icons/sl";
import { FaBook } from "react-icons/fa";
import { BiBed } from "react-icons/bi";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";

import MilouGift from "./components/MilouGift";
import MilouConsole from "./components/MilouConsole";
import MilouBook from "./components/MilouBook";
import MilouBed from "./components/MilouBed";
import MilouPoster from "./components/MilouPoster";
import MilouComputer from "./components/MilouComputer";

function Roomone() {
  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);

  const [showGiftModal, setShowGiftModal] = useState<boolean>(false);
  const [showConsoleModal, setShowConsoleModal] = useState<boolean>(false);
  const [showBookModal, setShowBookModal] = useState<boolean>(false);
  const [showBedModal, setShowBedModal] = useState<boolean>(false);
  const [showPosterModal, setShowPosterModal] = useState<boolean>(false);
  const [showComputerModal, setShowComputerModal] = useState<boolean>(false);

  function closeOrganizationModal(): void {
    setShowOrganizationModal(!showOrganizationModal);
  }

  return (
    <motion.div
      className="relative m-0 min-h-screen p-0 text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/"
        className="absolute top-0 left-0 z-30 mt-2 ml-4 h-[80px] w-[40px] cursor-pointer text-center text-white"
      >
        <img
          src="/Char1_Door_mini.png"
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
            className="absolute top-[31%] left-[38%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowComputerModal(!showComputerModal);
            }}
          >
            <FiMonitor
              color="yellow"
              size={60}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>
          <div
            className="absolute top-[50%] left-[30%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowConsoleModal(!showConsoleModal);
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
            className="absolute top-[27%] left-[47%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowBookModal(!showBookModal);
            }}
          >
            <FaBook
              color="yellow"
              size={50}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>
          <div
            className="absolute top-[28%] left-[56%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowBedModal(!showBedModal);
            }}
          >
            <BiBed
              color="yellow"
              size={70}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>
          <div
            className="absolute top-[12%] left-[58%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowPosterModal(!showPosterModal);
            }}
          >
            <FiImage
              color="yellow"
              size={70}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>
          <div
            className="absolute top-[19%] left-[70%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowGiftModal(!showGiftModal);
            }}
          >
            <FiGift
              color="yellow"
              size={50}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <img
            src="/Char1_Room.png"
            className="-z-50 mx-auto max-h-full max-w-none"
          />

          <MilouGift
            showObject={showGiftModal}
            setShowObject={setShowGiftModal}
          />
          <MilouConsole
            showObject={showConsoleModal}
            setShowObject={setShowConsoleModal}
          />
          <MilouBook
            showObject={showBookModal}
            setShowObject={setShowBookModal}
          />
          <MilouBed showObject={showBedModal} setShowObject={setShowBedModal} />
          <MilouPoster
            showObject={showPosterModal}
            setShowObject={setShowPosterModal}
          />
          <MilouComputer
            showObject={showComputerModal}
            setShowObject={setShowComputerModal}
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

export default Roomone;
