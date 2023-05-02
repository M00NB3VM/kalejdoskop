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

import ObjectOne from "./components/ObjectOne";
import ObjectTwo from "./components/ObjectTwo";
import ObjectThree from "./components/ObjectThree";
import ObjectFour from "./components/ObjectFour";
import ObjectFive from "./components/ObjectFive";
import ObjectSix from "./components/ObjectSix";

function Roomone() {
  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);

  const [showObjectOne, setShowObjectOne] = useState<boolean>(false);
  const [showObjectTwo, setShowObjectTwo] = useState<boolean>(false);
  const [showObjectThree, setShowObjectThree] = useState<boolean>(false);
  const [showObjectFour, setShowObjectFour] = useState<boolean>(false);
  const [showObjectFive, setShowObjectFive] = useState<boolean>(false);
  const [showObjectSix, setShowObjectSix] = useState<boolean>(false);

  function closeOrganizationModal(): void {
    setShowOrganizationModal(!showOrganizationModal);
  }

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
              setShowObjectOne(!showObjectOne);
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
              setShowObjectTwo(!showObjectTwo);
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
              setShowObjectThree(!showObjectThree);
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
              setShowObjectFour(!showObjectFour);
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
              setShowObjectFive(!showObjectFive);
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
              setShowObjectSix(!showObjectSix);
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

          <ObjectOne
            showObject={showObjectOne}
            setShowObject={setShowObjectOne}
          />
          <ObjectTwo
            showObject={showObjectTwo}
            setShowObject={setShowObjectTwo}
          />
          <ObjectThree
            showObject={showObjectThree}
            setShowObject={setShowObjectThree}
          />
          <ObjectFour
            showObject={showObjectFour}
            setShowObject={setShowObjectFour}
          />
          <ObjectFive
            showObject={showObjectFive}
            setShowObject={setShowObjectFive}
          />
          <ObjectSix
            showObject={showObjectSix}
            setShowObject={setShowObjectSix}
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
