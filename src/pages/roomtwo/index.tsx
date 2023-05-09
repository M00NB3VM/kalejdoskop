"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";

import { SlPicture } from "react-icons/sl";
import { CiDumbbell } from "react-icons/Ci";
import { RiBearSmileLine } from "react-icons/Ri";
import { RxEnvelopeClosed } from "react-icons/Rx";
import { FiMonitor } from "react-icons/fi";

import LiamComputer from "./components/LiamComputer";
import LiamDumbbells from "./components/LiamDumbbells";
import LiamEnvelope from "./components/LiamEnvelope";
import LiamPicture from "./components/LiamPicture";

function Roomtwo() {
  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);

  const [showDumbbellsModal, setShowDumbbellsModal] = useState<boolean>(false);
  const [showEnvelopeModal, setShowEnvelopeModal] = useState<boolean>(false);
  const [showPictureModal, setShowPictureModal] = useState<boolean>(false);
  const [showComputerModal, setShowComputerModal] = useState<boolean>(false);

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
          src="/Char2_Door_mini.png"
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
            className="absolute bottom-[26%] left-[39%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowDumbbellsModal(!showDumbbellsModal);
            }}
          >
            <CiDumbbell
              color="yellow"
              size={62}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute bottom-[23%] right-[47%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowEnvelopeModal(!showEnvelopeModal);
            }}
          >
            <RxEnvelopeClosed
              color="yellow"
              size={50}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute top-[22%] right-[29%] z-40 inline-block cursor-pointer"
            onClick={() => {
              setShowPictureModal(!showPictureModal);
            }}
          >
            <SlPicture
              color="yellow"
              size={50}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute bottom-[23%] right-[37%] z-40 inline-block cursor-pointer"
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

          <img
            src="/Char2_Room.png"
            className="-z-50 mx-auto max-h-full max-w-none"
          />

          <LiamComputer
            showObject={showComputerModal}
            setShowObject={setShowComputerModal}
          />
          <LiamDumbbells
            showObject={showDumbbellsModal}
            setShowObject={setShowDumbbellsModal}
          />
          <LiamEnvelope
            showObject={showEnvelopeModal}
            setShowObject={setShowEnvelopeModal}
          />
          <LiamPicture
            showObject={showPictureModal}
            setShowObject={setShowPictureModal}
          />

          <img
            src="/Char2_Room.png"
            className="-z-50 mx-auto max-h-full max-w-none"
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
export default Roomtwo;
