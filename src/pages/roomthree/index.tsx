"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";

import PolkaComputer from "./components/PolkaComputer";
import PolkaGameConsole from "./components/PolkaGameConsole";
import PolkaMirror from "./components/PolkaMirror";
import PolkaPlushy from "./components/PolkaPlushy";
import PolkaWardrobe from "./components/PolkaWardrobe";

function Roomthree() {
  const [showOrganizationModal, setShowOrganizationModal] =
    useState<boolean>(false);
  const [showOrganizationTab, setShowOrganizationTab] =
    useState<boolean>(false);

  const welcomeMessages: string[] = [
    "Välkommen till mitt rum!",
    "Jag streamar mina favoritspel. Kolla in min setup.",
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
    setShowOrganizationTab(false);
  }
  return (
    <motion.div
      className="relative m-0 min-h-screen overflow-hidden p-0 text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/"
        className="absolute top-0 left-0 z-30 mt-1 ml-2 h-auto cursor-pointer md:mt-2"
      >
        <img
          src="/naomi_door_mini.png"
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
            className="absolute top-[10%] left-[32.7%] z-40 inline-block max-h-[27%] max-w-[7.8%] transform cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => openModal("mirror")}
          >
            <div className="relative h-full w-full">
              <img
                alt="Klickbart object"
                src="/naomi_mirror_bg.png"
                className="absolute top-[2px] left-0 -z-20 scale-105"
              />
              <img
                alt="Spegel"
                src="/naomi_mirror.png"
                className="max-h-full max-w-full"
              />
            </div>
          </div>

          <div
            className="absolute top-[39.6%] left-[30%] z-40 inline-block max-h-[29.6%] max-w-[1.6%] transform cursor-pointer transition-transform duration-300 hover:scale-125"
            onClick={() => openModal("gameconsole")}
          >
            <div className="relative h-full w-full">
              <img
                alt="Klickbart object"
                src="/naomi_controller_bg.png"
                className="absolute top-0 left-0 -z-20 scale-105"
              />
              <img
                alt="Spelkontroll"
                src="/naomi_controller.png"
                className="max-h-full max-w-full"
              />
            </div>
          </div>

          <div
            className="absolute top-[62%] left-[36.4%] z-40 inline-block max-h-[15%] max-w-[8.3%] transform cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => openModal("plushy")}
          >
            <div className="relative h-full w-full">
              <img
                alt="Klickbart object"
                src="/naomi_plushy_bg.png"
                className="absolute top-0 left-0 -z-20 scale-105"
              />
              <img
                alt="Plushy"
                src="/naomi_plushy.png"
                className="max-h-full max-w-full"
              />
            </div>
          </div>

          <div
            className="absolute top-0 left-[44.8%] z-30 inline-block max-h-[37%] max-w-[10.3%] transform cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openModal("wardrobe")}
          >
            <div className="relative h-full w-full">
              <img
                alt="Klickbart object"
                src="/naomi_wardrobe_bg.png"
                className="absolute top-0 left-0 -z-20 scale-105"
              />
              <img
                alt="Garderob"
                src="/naomi_wardrobe.png"
                className="max-h-full max-w-full"
              />
            </div>
          </div>

          <div
            className="absolute top-[20.3%] left-[69.4%] z-40 inline-block max-h-[18%] max-w-[19.9%] transform cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => openModal("computer")}
          >
            <div className="relative h-full w-full">
              <img
                alt="Klickbart object"
                src="/naomi_monitor_bg.png"
                className="absolute top-0 left-0 -z-20 scale-105"
              />
              <img
                alt="Streaming setup"
                src="/naomi_monitor.png"
                className="max-h-full max-w-full"
              />
            </div>
          </div>

          <div
            className="absolute top-[50%] left-[50%] h-1 w-1"
            id="naomi-room"
          ></div>
          <img
            src="/naomi_room.png"
            className="-z-50 mx-auto h-full max-w-none"
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
