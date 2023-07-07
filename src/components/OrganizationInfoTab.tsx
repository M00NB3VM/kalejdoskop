"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { useStoreContext } from "~/context";
import { BsHash, BsXCircle } from "react-icons/bs";

interface OrganizationShort {
  name: string;
  img: string;
  imgDark: string;
  link: string;
  description: string;
  points: string[];
}

interface Props {
  showOrganizationTab: boolean;
  closeModal: () => void;
}

function OrganizationInfoTab({ showOrganizationTab, closeModal }: Props) {
  const { darkTheme } = useStoreContext();

  const variants = {
    open: { x: 0 },
  };

  const organizations: OrganizationShort[] = [
    {
      name: "Killar.se",
      img: "/Killar.se_liggande_svart.png",
      imgDark: "/Killar.se_liggande_vit.png",
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
      img: "/MAN_logotyp_svart.png",
      imgDark: "/MAN_logotyp_vit.png",
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
      img: "/Sverok_logo_blk.png",
      imgDark: "/Sverok_logo_white.png",
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
      className="absolute left-0 right-0 top-[30%] z-50"
      initial={{ x: "100%" }}
      animate={showOrganizationTab ? "open" : ""}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div className="ml-auto hidden w-full bg-secondary md:block">
        <ul className="ml-4 flex justify-center">
          <li
            onClick={() => {
              closeModal();
            }}
            className="mr-8 flex -rotate-90 transform cursor-pointer items-center"
          >
            <BsXCircle strokeWidth={1} className="mr-2" size={"22px"} />
            <p className="font-['documan_heavy'] text-xl">STÄNG</p>
          </li>
          {organizations.map((organization) => {
            return (
              <li
                key={organization.name}
                className={`relative my-4 mr-4 w-1/3 rounded px-4 py-4 shadow-lg lg:w-1/4 ${
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
                </div>
                <p
                  className={`text-sm, py-2
                      ${darkTheme ? "text-secondary" : "text-primary"}
                      `}
                >
                  {organization.description}
                </p>
                <ul className="mb-14 lg:mb-20">
                  {organization.points.map((point) => {
                    return (
                      <li
                        className={`flex text-sm ${
                          darkTheme ? "text-secondary" : "text-primary"
                        }`}
                        key={point}
                      >
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
    </motion.div>
  );
}

export default OrganizationInfoTab;
