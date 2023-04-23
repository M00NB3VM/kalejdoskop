"use client";

import React from "react";
import Link from "next/link";

import { useStoreContext } from "~/context";
import { BsHash } from "react-icons/bs";

interface OrganizationShort {
  name: string;
  img: string;
  imgDark: string;
  link: string;
  description: string;
  points: string[];
}

interface Props {
  closeModal: () => void;
}

function OrganizationInfoModal({ closeModal }: Props) {
  const { darkTheme } = useStoreContext();

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
    <div className="fixed left-0 top-0 right-0 z-50 min-h-screen bg-secondary md:hidden">
      <div className="flex">
        <div
          onClick={() => {
            closeModal();
          }}
          className="absolute top-1 right-2"
        >
          <p className="cursor-pointer px-2 text-2xl font-black text-accent">
            X
          </p>
        </div>

        <ul className="mx-auto my-8 flex flex-col">
          {organizations.map((organization) => {
            return (
              <li
                key={organization.name}
                className={`relative my-4 mx-auto w-11/12 rounded px-4 py-4 shadow-lg ${
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
                  className="absolute left-1/4 right-1/4 bottom-4 block transform rounded-full bg-accent px-4 py-2 text-center text-lg text-white transition duration-500 hover:bg-accentHover"
                >
                  {organization.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OrganizationInfoModal;
