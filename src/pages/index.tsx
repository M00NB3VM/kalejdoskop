import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import CallToAction from "~/components/CallToAction";
import EnterRoom from "~/components/EnterRoom";
import OrganizationsInfo from "~/components/OrganizationInfo";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Kalejdoskop</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <main>
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
    </>
  );
};

export default Home;
