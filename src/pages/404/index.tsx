import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

function Error() {
  return (
    <motion.div
      id="error-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-24 flex flex-col items-center"
    >
      <Head>
        <title>Sidan hittades inte!</title>
      </Head>

      <img alt="404" src="/404_image.png" className="max-w-screen mb-12" />
      <h1 className="text-lg">Oops! Sidan hittades inte.</h1>

      <Link
        href="/"
        className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
      >
        Till startsidan
      </Link>
    </motion.div>
  );
}

export default Error;
