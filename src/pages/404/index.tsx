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
    >
      <Head>
        <title>Sidan hittades inte!</title>
      </Head>
      <h1>Oops!</h1>
      <p className="mb-10">Ett fel uppstod. Försök igen.</p>

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
