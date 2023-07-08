"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";

import LiamComputer from "./components/LiamComputer";
import LiamDumbbells from "./components/LiamDumbbells";
import LiamEnvelope from "./components/LiamEnvelope";
import LiamPicture from "./components/LiamPicture";

function Roomtwo() {
  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);
  const [showOrganizationTab, setShowOrganizationTab] =
    useState<boolean>(false);

  const welcomeMessages: string[] = [
    "Ush! Fler brev från arbetsförmedlingen.",
    "Välkommen att kolla runt!",
    "Min favorithobby är att styrketräna.",
  ];
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");

  useEffect(() => {
    const message = welcomeMessages.sort(
      () => 0.5 - Math.random()
    )[0] as string;
    setWelcomeMessage(message);
  }, []);

  useEffect(() => {
    const element = document.getElementById("liam-room");

    element?.scrollIntoView({
      block: "center",
      inline: "center",
    });
  }, []);

  const [showDumbbellsModal, setShowDumbbellsModal] = useState<boolean>(false);
  const [showEnvelopeModal, setShowEnvelopeModal] = useState<boolean>(false);
  const [showPictureModal, setShowPictureModal] = useState<boolean>(false);
  const [showComputerModal, setShowComputerModal] = useState<boolean>(false);

  function openModal(modalName: string): void {
    closeModal();

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
    setShowOrganizationTab(false);
  }

  return (
    <motion.div
      className="relative m-0 min-h-screen overflow-hidden p-0 p-0 text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/"
        className="absolute top-0 left-0 z-30 mt-1 ml-2 h-auto cursor-pointer md:mt-2"
      >
        <img
          src="/liam_door_mini.png"
          alt="Hem"
          className="mx-auto h-auto max-w-[27px] md:max-w-[40px]"
        />
        <img
          alt="Exit"
          src="/exit_sign.png"
          className="mt-1 h-auto max-w-[27px] md:max-w-[40px]"
        />
      </Link>

      <div className="absolute right-2 top-0 z-40">
        <div className="relative h-full w-full">
          <motion.div
            initial={{ y: "-40px" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              delay: 5.1,
            }}
            viewport={{ once: true }}
            className="absolute -top-[10px] left-0 -z-50 h-[40px] w-[40px] rounded-full bg-secondary"
          ></motion.div>
          <motion.div
            initial={{ y: "-40px" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              delay: 5,
            }}
            viewport={{ once: true }}
            className="absolute top-[13px] left-[20px] -z-50 h-[25px] w-[25px] rounded-full bg-secondary"
          ></motion.div>
          <motion.div
            initial={{ y: "-40px" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              delay: 5.2,
            }}
            viewport={{ once: true }}
            className="absolute -top-[10px] left-[30px] -z-50 h-[45px] w-[45px] rounded-full bg-secondary"
          ></motion.div>
          <motion.div
            initial={{ y: "-50px" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100,
              delay: 5,
            }}
            viewport={{ once: true }}
            className="absolute -top-[14px] right-[4px] -z-50 h-[55px] w-[55px] rounded-full bg-secondary"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 5.2,
            }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => {
                closeModal();
                setShowOrganizationModal(true);
                setShowOrganizationTab(true);
              }}
              className="cursor-pointer px-[20px] text-xl font-bold tracking-wider"
            >
              Läs&nbsp;mig
            </button>
          </motion.div>
        </div>
      </div>

      {showOrganizationTab ? (
        <OrganizationInfoTab
          showOrganizationTab={showOrganizationTab}
          closeModal={closeModal}
        />
      ) : (
        ""
      )}

      <div className="relative h-screen min-w-min overflow-visible overflow-x-auto bg-[#000]">
        <div className="absolute h-full min-w-min xl:left-[50%] xl:-translate-x-[50%] xl:transform">
          <div className="absolute left-0 top-[50%] ml-8 flex h-fit lg:hidden">
            <motion.img
              alt="pil"
              src="/arrow_icon.png"
              className="mr-2 h-4 w-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
            <motion.img
              alt="pil"
              src="/arrow_icon.png"
              className="mr-2 h-4 w-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, delay: 0.7 }}
            />
            <motion.img
              alt="pil"
              src="/arrow_icon.png"
              className="h-4 w-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, delay: 0.9 }}
            />
          </div>

          <div
            className="absolute top-[31%] left-[41%] z-40 inline-block max-h-[10%] max-w-[5.7%] transform cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => openModal("dumbbells")}
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ x: 0, rotate: 0 }}
              whileInView={{
                x: ["-2px", "1px", "-1px", "2px", "0px"],
                rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                alt="Klickbart object"
                src="/liam_dumbbells_bg.png"
                className="absolute top-0 left-0 -z-20 scale-110"
              />
              <img
                alt="Hantlar"
                src="/liam_dumbbells.png"
                className="max-h-full max-w-full"
              />
            </motion.div>
          </div>

          <div
            className="absolute top-[42%] left-[25.7%] z-40 inline-block max-h-[4.6%] max-w-[4%] transform cursor-pointer transition-transform duration-300 hover:scale-125"
            onClick={() => openModal("envelope")}
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ x: 0, rotate: 0 }}
              whileInView={{
                x: ["-2px", "1px", "-1px", "2px", "0px"],
                rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                alt="Klickbart object"
                src="/liam_letter_bg.png"
                className="absolute top-0 left-[2px] -z-20 scale-110"
              />
              <img
                alt="Hantlar"
                src="/liam_letter.png"
                className="max-h-full max-w-full"
              />
            </motion.div>
          </div>

          <div
            className="absolute top-[20.5%] left-[72.5%] z-40 inline-block max-h-[6%] max-w-[4%] transform cursor-pointer transition-transform duration-300 hover:scale-125"
            onClick={() => openModal("picture")}
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ x: 0, rotate: 0 }}
              whileInView={{
                x: ["-2px", "1px", "-1px", "2px", "0px"],
                rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1 }}
              viewport={{ once: true }}
            >
              <img
                alt="Klickbart object"
                src="/liam_photo_bg.png"
                className="absolute top-[1px] left-[2px] -z-20 scale-110"
              />
              <img
                alt="Foto på Liam och hans ex-flickvän"
                src="/liam_photo.png"
                className="max-h-full max-w-full"
              />
            </motion.div>
          </div>

          <div
            className="absolute top-[68%] left-[51%] z-40 inline-block max-h-[13.3%] max-w-[11%] transform cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => openModal("computer")}
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ x: 0, rotate: 0 }}
              whileInView={{
                x: ["-2px", "1px", "-1px", "2px", "0px"],
                rotate: [0, -0.5, 0.5, -0.5, 0.5, 0],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
              viewport={{ once: true }}
            >
              <img
                alt="Klickbart object"
                src="/liam_computer_bg.png"
                className="absolute -top-[1px] left-[1px] -z-20 scale-105"
              />
              <img
                alt="Monitor"
                src="/liam_computer.png"
                className="max-h-full max-w-full"
              />
            </motion.div>
          </div>

          <div
            className="absolute top-[50%] left-[50%] h-1 w-1"
            id="liam-room"
          ></div>
          <img
            alt="Room"
            src="/liam_room.png"
            className="-z-50 mx-auto h-full max-w-none"
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
        </div>

        {showOrganizationModal ? (
          <OrganizationInfoModal closeModal={closeModal} />
        ) : (
          <></>
        )}

        <motion.div
          className="fixed left-[90px] bottom-[120px] z-50 md:bottom-[160px] md:left-[150px]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 4 }}
        >
          <div className="min-h-[60px] min-w-[110px] max-w-[150px] rounded-lg bg-accent">
            <p className="p-2 text-center text-sm text-white">
              {!welcomeMessage ? "" : welcomeMessage}
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
              className="mr-1 h-[72px] w-[72px] bg-[url('/naomi_room_nav_mini.png')] bg-contain bg-no-repeat md:h-[80px] md:w-[80px]"
            ></Link>
          </nav>
          <div className="absolute bottom-0 left-0 -z-30 h-[15px] w-full rounded-tr-lg bg-primary"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Roomtwo;
