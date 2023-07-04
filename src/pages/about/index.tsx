import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

import ThemeToggleButton from "~/components/ThemeToggleButton";
import Footer from "~/components/Footer";

interface Partner {
  name: string;
  about: string;
  url: string;
}

function About() {
  const partners: Partner[] = [
    {
      name: "Ditt ECPAT",
      about:
        "En plats för alla under 18 år. Här kan du få hjälp, stöd och kunskap om bilder, sexuella kränkningar, hot och övergrepp på nätet eller IRL. Vi kan också hjälpa dig ta ner nakenbilder som har spridits.",
      url: "https://dittecpat.se",
    },
    {
      name: "Mind • Livslinjen",
      about:
        "En anonym stödchatt där alla mellan 16 och 25 år kan prata med en vuxen om saker i livet som känns jobbiga. Stort som smått.",
      url: "https://mind.se/hitta-hjalp/livslinjen",
    },
    {
      name: "Storasyster",
      about:
        "Stöd till dig som blivit utsatt för våldtäkt eller andra sexuella övergrepp.",
      url: "https://storasyster.org",
    },
    {
      name: "UMO",
      about:
        "För alla som är mellan 13 och 25 år. Här kan du få kunskap om kroppen, sex, relationer, psykisk hälsa, alkohol och droger, självkänsla och mycket annat.",
      url: "https://www.umo.se",
    },
    {
      name: "Ungasjourer.se",
      about:
        "Samlar alla jourer i Sverige som arbetar med att stötta och stärka barn, unga och unga vuxna! Ofta kan du chatta, maila eller ringa och prata med en jour. Hos en jour kan du alltid vara anonym.",
      url: "https://www.ungasjourer.se/",
    },
  ];

  // Animations
  const box = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "ease-out",
        duration: 0.8,
      },
    },
  };

  const links = {
    opacity: 1,
  };

  const arrow = {
    hover: {
      x: [0, 4, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Head>
        <title>Om Kalejdoskop</title>
      </Head>
      <main>
        <ThemeToggleButton />
        <Link
          href="/"
          className="m-4 flex w-[140px] transform flex-row items-center justify-center rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
        >
          <BsChevronLeft className="mr-1 stroke-[0.7]" />
          Tillbaka
        </Link>

        <div className="max-w-screen m-2 mx-auto flex flex-col justify-between md:w-4/5 lg:flex-row">
          <div className="mx-2 lg:mr-10 lg:w-[60%]">
            <h1 className="mt-10 text-xl">Om detta projekt</h1>
            <p className="my-4 w-full text-sm md:text-base">
              Spelet Kalejdoskop är framtaget i organisationen MÄNs
              Arvsfondsfinansierade projekt Killar om porr, i samarbete med
              spelkulturförbundet Sverok, Futuregames och Changemaker
              Educations.
            </p>
            <p className="my-4 w-full text-sm md:text-base">
              Vi träffade killar som själva spelar många spel och lärde oss att
              det kan vara ett bra sätt för unga att få nya tankar, lära sig
              saker och träna på att sätta sig in i hur något kan bli för en
              annan person. Då växte idén med Kalejdoskop fram. Ett Kalejdoskop
              är en leksak från 1800-talet som ser ut som ett rör med speglar
              inuti. När du tittar i den förvrängs bilden med färger och
              mönster, du får ett annat perspektiv. Och det är ju det som är
              tanken med spelet, att man ska få fler perspektiv.
            </p>
            <p className="my-4 text-sm md:text-base">
              När du spelar kommer du träffa tre karaktärer, Milou, Liam och
              Polka. De är tre unga vars liv sammanlänkas via sitt intresse för
              datorspel och spelkulturen. Onlinekulturen kan vara underbar och
              ge oss vänner för livet, men vi vet samtidigt att våld och
              kränkningar sker regelbundet och att skärmen emellan oss kan
              ibland göra det svårt att förstå hur det man säger eller gör blir
              för någon annan. Med Kalejdoskop hoppas vi att du tar med dig en
              tanke om det och hjälper till att fortsätta skapa en rolig och
              härlig miljö där du och dina vänner mår bra.
            </p>
          </div>

          <div className="mx-2 mt-10 w-fit self-center text-base md:text-lg lg:w-[39%] lg:self-start xl:w-[29%] 2xl:w-[25%]">
            <motion.div
              className="relative "
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2 }}
            >
              <motion.div
                className="absolute left-[50px] top-3 h-[18px] w-[13px]"
                initial={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                animate={{ opacity: [0, 1, 0] }}
              >
                <img
                  src="/sparkle_pink.png"
                  alt="Stjärna"
                  className="max-h-[100%] max-w-[100%]"
                />
              </motion.div>
              <motion.div
                className="absolute -top-2 left-[75px] h-[25px] w-[20px]"
                initial={{ opacity: 1 }}
                transition={{ duration: 1 }}
                animate={{ opacity: [0, 1, 0] }}
              >
                <img
                  src="/sparkle_pink.png"
                  alt="Stjärna"
                  className="max-h-[100%] max-w-[100%]"
                />
              </motion.div>
              <motion.div
                className="absolute -top-5 right-[100px] h-[20px] w-[15px]"
                initial={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                animate={{ opacity: [0, 1, 0] }}
              >
                <img
                  src="/sparkle_pink.png"
                  alt="Stjärna"
                  className="max-h-[100%] max-w-[100%]"
                />
              </motion.div>
              <motion.div
                className="absolute top-2 right-[70px] h-[20px] w-[15px]"
                initial={{ opacity: 1 }}
                transition={{ duration: 1.3 }}
                animate={{ opacity: [0, 1, 0] }}
              >
                <img
                  src="/sparkle_pink.png"
                  alt="Stjärna"
                  className="max-h-[100%] max-w-[100%]"
                />
              </motion.div>
            </motion.div>
            <h2 className="text-center text-xl">Länkar</h2>

            <div className="flex h-[25px] max-w-full justify-between bg-gradient-to-t from-primary to-primary bg-[length:100%_2px] bg-center bg-no-repeat">
              <img
                src="/sparkle.png"
                alt="stjäna"
                className="mx-2 max-h-full w-auto"
              />
              <img
                src="/sparkle.png"
                alt="stjäna"
                className="mx-2 max-h-full w-auto"
              />
            </div>

            <ul className="mt-2 w-full rounded-2xl border-b-[6px] border-b-accent bg-secondary px-6 py-4 text-primary">
              <motion.li className="my-4" whileHover="hover" animate={links}>
                <Link href="https://killar.se/" className="flex items-center">
                  <motion.div variants={arrow}>
                    <BsArrowRight className="mr-2 stroke-[1]" />
                  </motion.div>
                  <p>Killar.se</p>
                </Link>
              </motion.li>
              <motion.li className="my-4" whileHover="hover" animate={links}>
                <Link href="https://mfj.se/" className="flex items-center">
                  <motion.div variants={arrow}>
                    <BsArrowRight className="mr-2 stroke-[1]" />
                  </motion.div>
                  <p>MÄN</p>
                </Link>
              </motion.li>
              <motion.li className="my-4" whileHover="hover" animate={links}>
                <Link href="https://sverok.se/" className="flex items-center">
                  <motion.div variants={arrow}>
                    <BsArrowRight className="mr-2 stroke-[1]" />
                  </motion.div>
                  <p>Sverok</p>
                </Link>
              </motion.li>
              <motion.li className="my-4" whileHover="hover" animate={links}>
                <Link
                  href="https://cmeducations.se/"
                  className="flex items-center"
                >
                  <motion.div variants={arrow}>
                    <BsArrowRight className="mr-2 stroke-[1]" />
                  </motion.div>
                  <p>Changemaker Educations</p>
                </Link>
              </motion.li>
              <motion.li className="my-4" whileHover="hover" animate={links}>
                <Link
                  href="https://futuregames.se/"
                  className="flex items-center"
                >
                  <motion.div variants={arrow}>
                    <BsArrowRight className="mr-2 stroke-[1]" />
                  </motion.div>
                  <p>Futuregames</p>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <img
          src="/divider_two.png"
          alt="dekoration"
          className="my-10 h-auto max-w-full pl-2"
        />
        <h3 className="mx-2 mb-4 text-lg md:mx-auto md:w-4/5">
          Fler bra ställen
        </h3>

        <motion.ul
          className="mx-2 mx-auto mb-10 flex w-auto flex-wrap justify-center sm:justify-start md:w-4/5"
          variants={box}
          whileInView="animate"
          viewport={{ once: true }}
        >
          {partners.map((partner) => {
            return (
              <motion.li
                initial={{ opacity: 0, x: 30 }}
                variants={card}
                className="mx-8 max-w-[250px] rounded p-4 shadow-lg sm:mx-4 md:mx-1 md:max-w-[280px] md:p-6"
                key={partner.name}
              >
                <Link href={partner.url}>
                  <h6
                    className="mb-4 border-b-2 border-b-accent
                   text-lg"
                  >
                    {partner.name}
                  </h6>
                  <p className="text-sm md:text-base">{partner.about}</p>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <Footer />
      </main>
    </motion.div>
  );
}

export default About;
