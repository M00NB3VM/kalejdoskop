import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

function Error() {
  return (
    <motion.div id="error-page" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}>
      <Head>
        <title>Sidan hittades inte!</title>
      </Head>
      <h1>Oops!</h1>
      <p>Ett fel uppstod. Försök igen.</p>
    </motion.div>
  );
}

export default Error;
