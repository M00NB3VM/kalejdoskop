"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { useStoreContext } from "~/context";
import { BsChevronUp, BsChevronDown, BsHash } from "react-icons/bs";

interface OrganizationShort {
  name: string;
  img: string;
  imgDark: string;
  link: string;
  description: string;
  points: string[];
}

function OrganizationInfoTab() {
  const { darkTheme } = useStoreContext();

  const variants = {
    open: { x: "25%" },
  };
  const [showTab, setShowTab] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const organizations: OrganizationShort[] = [
    {
      name: "Killar.se",
      img: "/Killar.se_liggande_lila.png",
      imgDark: "/Killar.se_liggande_ljuslila.png",
      link: "https://killar.se/",
      description:
        "För alla som identifierar sig som kille eller ung man mellan 10-25 år.",
      points: [
        "Stöd och samtalsmottagning",
        "Information och berättelser",
        "Anonym stödchatt",
      ],
    },
    {
      name: "MÄN",
      img: "/MAN_logotyp_lila.png",
      imgDark: "/MAN_logotyp_ljuslila.png",
      link: "https://mfj.se/",
      description: "MÄN arbetar för jämställdhet och mot mäns våld.",
      points: [
        "Feministisk syn på världen",
        "Förändra destruktiva manlighetsnormer",
        "Engagera män och killar för jämställdhet",
      ],
    },
    {
      name: "Sverok",
      img: "/Sverok_logotyp_gul.png",
      imgDark: "/Sverok_logotyp_lila.png",
      link: "https://sverok.se/",
      description:
        "Sverok är en idéell organisation och ett av Sveriges största ungdomsförbund.",
      points: [
        "44 000 medlemmar och 1700 föreningar",
        "Starta och driv egen verksamhet",
        "Sprider spelkultur",
      ],
    },
  ];

  return (
    <motion.div
      className="fixed top-[30%] right-0 z-50 m-0 p-0"
      initial={{ x: "calc(100% - 40px)" }}
      animate={showTab ? "open" : ""}
      variants={variants}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="z-50 hidden w-[75%] rounded-l-lg bg-secondary md:block">
        <div className="flex">
          <div
            onClick={() => {
              setShowTab(!showTab);
            }}
            className="relative min-w-[40px] cursor-pointer"
            key="tab"
          >
            <div className="absolute bottom-2 -left-2 flex -rotate-90 items-center justify-center font-bold text-accent">
              {showTab ? (
                <BsChevronDown
                  className="ml-2 w-10 pl-2"
                  style={{ strokeWidth: 2 }}
                />
              ) : (
                <BsChevronUp
                  className="ml-2 w-10 pl-2"
                  style={{ strokeWidth: 2 }}
                />
              )}
              <p className="w-2 pl-2 tracking-wider">Läs&nbsp;mig</p>
            </div>
          </div>
          <ul className="flex">
            {organizations.map((organization) => {
              return (
                <li
                  key={organization.name}
                  className={`relative my-4 mr-4 w-1/3 rounded px-4 py-4 shadow-lg ${
                    darkTheme ? "bg-black" : "bg-white"
                  }`}
                >
                  <div className="flex">
                    {darkTheme ? (
                      <img
                        className="max-h-10 max-w-[100%]"
                        src={organization.imgDark}
                        alt={`${organization.name} Logotyp`}
                      />
                    ) : (
                      <img
                        className="max-h-10 max-w-[100%]"
                        src={organization.img}
                        alt={`${organization.name} Logotyp`}
                      />
                    )}

                    {organization.name === "Sverok" ? (
                      <h6 className="ml-4 text-2xl">{organization.name}</h6>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="py-2 text-sm">{organization.description}</p>
                  <ul className="mb-14 lg:mb-20">
                    {organization.points.map((point) => {
                      return (
                        <li className="flex text-sm" key={point}>
                          <BsHash className="mr-1 mt-1" />
                          {point}
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href={organization.link}
                    className="absolute bottom-4 left-8 right-8 block transform rounded-full bg-accent px-4 py-2 text-center text-lg text-white transition duration-500 hover:bg-accentHover lg:right-12 lg:left-12"
                  >
                    {organization.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default OrganizationInfoTab;
