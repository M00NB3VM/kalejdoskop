import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

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
        <h1>Hello world</h1>
        <OrganizationsInfo />
      </main>
    </>
  );
};

export default Home;
