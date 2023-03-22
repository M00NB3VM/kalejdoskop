import React from "react";
import Head from "next/head";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

import ThemeToggleButton from "~/components/ThemeToggleButton";

function About() {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}>
      <Head>
        <title>Om Kalejdoskop</title>
      </Head>
      <main>
        <ThemeToggleButton />
        <Link
          href="/"
          className="m-4 flex w-[130px] transform flex-row items-center justify-center rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
        >
          <BsChevronLeft />
          Tillbaka
        </Link>

        <h1 className="w-4/5 mx-auto text-xl mt-10">Om detta projekt</h1>
        <p className="w-4/5 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corrupti quos impedit a, repellendus quam nemo nesciunt sunt. Veritatis magni illo, unde delectus soluta quaerat tempora nemo molestias quidem sed.</p>
      </main>
    </motion.div>
  );
}

export default About;
