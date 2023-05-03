import React, { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ThemeToggleButton from "~/components/ThemeToggleButton";
import CallToAction from "~/components/CallToAction";
import EnterRoom from "~/components/EnterRoom";
import OrganizationsInfo from "~/components/OrganizationInfo";
import ThankYouModal from "~/components/ThankYouModal";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mb-10"
    >
      <Head>
        <title>Kalejdoskop</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <main>
        <ThemeToggleButton />
        <CallToAction />
        {showModal ? (
          <ThankYouModal showModal={showModal} setShowModal={setShowModal} />
        ) : (
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Nerladdat!
          </button>
        )}

        <EnterRoom />

        <Image
          src="/divider_one.png"
          alt="dekoration"
          className="my-10 h-auto max-w-full pl-2"
        />

        <OrganizationsInfo />

        <Image
          src="/divider_three.png"
          alt="dekoration"
          className="my-10 h-auto max-w-full pl-2"
        />

        <div className="mt-10 flex flex-col items-center justify-center">
          <h5 className="text-center text-xl">
            Vill du läsa mer om projektet?{" "}
          </h5>
          <Link
            href="about"
            className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white shadow-md transition duration-500 hover:scale-110 hover:bg-accentHover"
          >
            Tryck här!
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
