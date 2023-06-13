import React from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import ThemeToggleButton from "~/components/ThemeToggleButton";
import CallToAction from "~/components/CallToAction";
import EnterRoom from "~/components/EnterRoom";
import OrganizationsInfo from "~/components/OrganizationInfo";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Head>
        <title>Kalejdoskop</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <main>
        <ThemeToggleButton />
        <CallToAction />

        <EnterRoom />

        <img
          src="/divider_one.png"
          alt="dekoration"
          className="my-10 h-auto max-w-full pl-2"
        />

        <OrganizationsInfo />

        <img
          src="/divider_three.png"
          alt="dekoration"
          className="my-10 h-auto max-w-full pl-2"
        />

        <div className="mt-10 mb-10 flex flex-col items-center justify-center">
          <h5 className="text-center text-xl">
            Vill du läsa mer om projektet?
          </h5>
          <Link
            href="about"
            className="mt-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white shadow-md transition duration-500 hover:scale-110 hover:bg-accentHover"
          >
            Tryck här!
          </Link>
        </div>

        <Footer />
      </main>
    </motion.div>
  );
};

export default Home;
