"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";

import { SlGameController } from "react-icons/sl";
import { GiMirrorMirror } from "react-icons/gi";
import { RiBearSmileLine } from "react-icons/ri";
import { GiDoor } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";

import PolkaComputer from "./components/PolkaComputer";
import PolkaGameConsole from "./components/PolkaGameConsole";
import PolkaMirror from "./components/PolkaMirror";
import PolkaPlushy from "./components/PolkaPlushy";
import PolkaWardrobe from "./components/PolkaWardrobe";

function Roomthree() {
  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);

  const welcomeMessages: string[] = [
    "Välkommen att kolla runt!",
    "Jag streamar mina favoritspel.",
    "Jag samlar på plushys, kan du hitta en?",
  ];
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");

  useEffect(() => {
    const message = welcomeMessages.sort(
      () => 0.5 - Math.random()
    )[0] as string;
    setWelcomeMessage(message);
  }, []);

  useEffect(() => {
    const element = document.getElementById("naomi-room");

    element?.scrollIntoView({
      block: "center",
      inline: "center",
    });
  }, []);

  const [showGameConsoleModal, setShowGameConsoleModal] =
    useState<boolean>(false);
  const [showMirrorModal, setShowMirrorModal] = useState<boolean>(false);
  const [showPlushyModal, setShowPlushyModal] = useState<boolean>(false);
  const [showWardrobeModal, setShowWardrobeModal] = useState<boolean>(false);
  const [showComputerModal, setShowComputerModal] = useState<boolean>(false);

  function openModal(modalName: string): void {
    closeModal();

    switch (modalName) {
      case "gameconsole":
        setShowGameConsoleModal(true);
        break;
      case "mirror":
        setShowMirrorModal(true);
        break;
      case "plushy":
        setShowPlushyModal(true);
        break;
      case "wardrobe":
        setShowWardrobeModal(true);
        break;
      case "organization":
        setShowOrganizationModal(true);
        break;
      case "computer":
        setShowComputerModal(true);
        break;
      default:
        break;
    }
  }

  function closeModal(): void {
    setShowGameConsoleModal(false);
    setShowMirrorModal(false);
    setShowPlushyModal(false);
    setShowWardrobeModal(false);
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
        className="absolute top-0 left-0 z-30 mt-2 ml-2 h-[80px] w-[40px] cursor-pointer text-center text-white"
      >
        <img
          src="/naomi_door_mini.png"
          alt="Hem"
          className="max-h-full max-w-full border-[1px]"
        />
        <p>Exit</p>
      </Link>

      {showOrganizationModal ? (
        <></>
      ) : (
        <div className="absolute right-2 top-0 z-40 md:hidden">
          <div className="relative h-full w-full">
            <motion.div
              initial={{ y: "-40px" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                delay: 4.1,
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
                delay: 4,
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
                delay: 4.2,
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
                delay: 4,
              }}
              viewport={{ once: true }}
              className="absolute -top-[14px] right-[4px] -z-50 h-[55px] w-[55px] rounded-full bg-secondary"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 4.2,
              }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => {
                  openModal("organization");
                }}
                className="cursor-pointer px-[20px] text-xl font-bold tracking-wider"
              >
                Läs&nbsp;mig
              </button>
            </motion.div>
          </div>
        </div>
      )}

      <OrganizationInfoTab />

      <div className="relative h-screen min-w-min overflow-visible overflow-x-auto bg-[#000]">
        <div className="absolute h-full min-w-min xl:left-[50%] xl:-translate-x-[50%] xl:transform">
          <div
            className="absolute top-[28%] left-[35%] z-40 inline-block cursor-pointer"
            onClick={() => openModal("mirror")}
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
            onClick={() => openModal("gameconsole")}
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
            onClick={() => openModal("plushy")}
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
            onClick={() => openModal("wardrobe")}
          >
            <GiDoor
              color="yellow"
              size={60}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute top-[32%] right-[30%] z-40 inline-block cursor-pointer"
            onClick={() => openModal("computer")}
          >
            <FiMonitor
              color="yellow"
              size={60}
              strokeWidth={2}
              className="drop-shadow-[2px_-2px_4px_#00ffc8]"
            />
          </div>

          <div
            className="absolute top-[50%] left-[50%] h-1 w-1"
            id="naomi-room"
          ></div>
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
        </div>

        {showOrganizationModal ? (
          <OrganizationInfoModal closeModal={closeModal} />
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
        transition={{ duration: 0.7, delay: 2.5 }}
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
            href="/roomthree"
            className="mr-3 h-[100px] w-[100px] bg-[url('/naomi_room_nav_active.png')] bg-contain bg-no-repeat md:h-[150px] md:w-[150px]"
          ></Link>
          <Link
            href="/roomone"
            className="mr-3 ml-3 h-[72px] w-[72px] bg-[url('/milou_room_nav_mini.png')] bg-contain bg-no-repeat sm:ml-12 md:ml-24 md:h-[80px] md:w-[80px]"
          ></Link>
          <Link
            href="/roomtwo"
            className="mr-1 h-[72px] w-[72px] bg-[url('/liam_room_nav_mini.png')] bg-contain bg-no-repeat md:h-[80px] md:w-[80px]"
          ></Link>
        </nav>
        <div className="absolute bottom-0 left-0 -z-30 h-[15px] w-full rounded-tr-lg bg-primary"></div>
      </div>
    </motion.div>
  );
}
export default Roomthree;
