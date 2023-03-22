import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import { api } from "~/utils/api";

import ThemeToggleButton from "~/components/ThemeToggleButton";
import CallToAction from "~/components/CallToAction";
import EnterRoom from "~/components/EnterRoom";
import OrganizationsInfo from "~/components/OrganizationInfo";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    >
      <Head>
        <title>Kalejdoskop</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <ThemeToggleButton />
        <CallToAction />
        <EnterRoom />
        <OrganizationsInfo />

        <div className="mx-4 mt-10 flex flex-col items-center justify-center">
          <h5 className="text-xl">Vill du läsa mer om projektet? </h5>
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
