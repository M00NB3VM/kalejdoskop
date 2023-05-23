import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";

import { SlPicture } from "react-icons/sl";
import { CiDumbbell } from "react-icons/Ci";
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

  function openModal(modalName: string): void {
    setShowDumbbellsModal(false);
    setShowEnvelopeModal(false);
    setShowPictureModal(false);
    setShowComputerModal(false);
    setShowOrganizationModal(false);
    switch (modalName) {
      case "dumbbells":
        setShowDumbbellsModal(true);
        break;
      case "envelope":
        setShowEnvelopeModal(true);
        break;
      case "picture":
        setShowPictureModal(true);
        break;
      case "computer":
        setShowComputerModal(true);
        break;
      case "organization":
        setShowOrganizationModal(true);
        break;
      default:
        break;
    }
  }

  function closeModal(): void {
    setShowDumbbellsModal(false);
    setShowEnvelopeModal(false);
    setShowPictureModal(false);
    setShowComputerModal(false);
    setShowOrganizationModal(false);
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
            onClick={() => openModal("dumbbells")}
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
            onClick={() => openModal("envelope")}
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
            onClick={() => openModal("picture")}
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
            onClick={() => openModal("computer")}
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

          <div className="absolute right-0 top-[45%] z-50 md:hidden">
            <p
              onClick={() => openModal("organization")}
              className="inline-block origin-bottom-right -rotate-90 cursor-pointer rounded-t-lg bg-secondary px-[20px] py-1 text-xl font-bold tracking-wider text-accent"
            >
              Läs&nbsp;mig
            </p>
          </div>
        </div>

        {showOrganizationModal ? (
          <OrganizationInfoModal closeModal={closeModal} />
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  );
}

export default Roomtwo;

/*"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";

import { SlPicture } from "react-icons/sl";
import { CiDumbbell } from "react-icons/Ci";
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

  useEffect(()=> {
    if (showComputerModal === true) {
      setShowDumbbellsModal(false);
      setShowEnvelopeModal(false);
      setShowPictureModal(false);
      setShowOrganizationModal(false);
    }
  }, [])

  

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

          <div className="absolute right-0 top-[45%] z-40 md:hidden">
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

      <div className="fixed left-0 bottom-[50%] ml-4 flex h-fit lg:hidden">
        <motion.img
          alt="pil"
          src="/arrow_icon.png"
          className="mr-2 h-8 w-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
        <motion.img
          alt="pil"
          src="/arrow_icon.png"
          className="mr-2 h-8 w-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />
        <motion.img
          alt="pil"
          src="/arrow_icon.png"
          className="h-8 w-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, delay: 0.9 }}
        />
      </div>

      <motion.div
        className="fixed left-[90px] bottom-[120px] md:bottom-[160px] md:left-[150px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 2.2 }}
      >
        <div className="h-[80px] w-[120px] rounded-lg bg-accent">
          <p className="p-2 text-center text-white">
            Välkommen att kolla runt!
          </p>
        </div>
        <div
          className="ml-4 h-4 w-6 bg-accent"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
        ></div>
      </motion.div>

      <div className="max-w-screen fixed bottom-[20px] left-0 min-w-min">
        <div className="absolute bottom-[25px] left-0 -z-30 h-[15px] w-[42%] bg-[url('/divider_mini.png')] bg-cover bg-right bg-no-repeat sm:w-[50%] md:w-[58%]"></div>
        <nav className="flex items-end">
          <Link
            href="/roomtwo"
            className="mr-3 h-[100px] w-[100px] bg-[url('/liam_room_nav_active.png')] bg-contain bg-no-repeat md:h-[150px] md:w-[150px]"
          ></Link>
          <Link
            href="/roomone"
            className="mr-3 ml-3 h-[72px] w-[72px] bg-[url('/milou_room_nav_mini.png')] bg-contain bg-no-repeat sm:ml-12 md:ml-24 md:h-[80px] md:w-[80px]"
          ></Link>
          <Link
            href="/roomthree"
            className="mr-1 h-[72px] w-[72px] bg-[url('/polka_room_nav_mini.png')] bg-contain bg-no-repeat md:h-[80px] md:w-[80px]"
          ></Link>
        </nav>
        <div className="absolute bottom-0 left-0 -z-30 h-[15px] w-full rounded-tr-lg bg-primary"></div>
      </div>
    </motion.div>
  );
}
export default Roomtwo;*/
