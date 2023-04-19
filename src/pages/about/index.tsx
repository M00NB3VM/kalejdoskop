import React from "react";
import Head from "next/head";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

import ThemeToggleButton from "~/components/ThemeToggleButton";

interface Partner {
  name: string;
  about: string;
  url: string;
}

function About() {
  const partners: Partner[] = [
    {
      name: "Mind • Livslinjen",
      about:
        "En anonym stödchatt där alla mellan 16 och 25 år kan prata med en vuxen om saker i livet som känns jobbiga. Stort som smått.",
      url: "https://mind.se/hitta-hjalp/livslinjen",
    },
    {
      name: "Mind • Självmordslinjen",
      about:
        "Till för dig som har tankar på att ta ditt liv eller har en närstående med sådana tankar. Här kan du chatta anonymt med våra volontärer dygnet runt, årets alla dagar.",
      url: "https://mind.se/chatt",
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
      name: "Unizon",
      about:
        "Riksförbund för över 130 idéburna kvinnojourer, tjejjourer och ungdomsjourer som arbetar för ett jämställt samhälle fritt från våld.",
      url: "https://www.unizonjourer.se/ung",
    },
  ];

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

        <h1 className="mx-auto mt-10 w-4/5 text-xl">Om detta projekt</h1>
        <p className="mx-auto w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          corrupti quos impedit a, repellendus quam nemo nesciunt sunt.
          Veritatis magni illo, unde delectus soluta quaerat tempora nemo
          molestias quidem sed.
        </p>

        <img
          src="/divider_two.png"
          alt="dekoration"
          className="my-10 h-auto max-w-full pl-2"
        />
        <h3 className="mx-auto mb-4 w-4/5 text-lg">Fler bra ställen</h3>

        <ul className="m-4 mx-auto mb-8 flex w-4/5 flex-wrap">
          {partners.map((partner) => {
            return (
              <li
                className="mr-0 max-w-[290px] rounded p-4 shadow-lg md:mr-4 md:p-6"
                key={partner.name}
              >
                <Link href={partner.url}>
                  <h6
                    className="mb-4 border-b-2 border-b-accent
                   text-lg"
                  >
                    {partner.name}
                  </h6>
                  <p>{partner.about}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </motion.div>
  );
}

export default About;
