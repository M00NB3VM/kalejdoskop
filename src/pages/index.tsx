import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

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
        <h1>Kommer snart</h1>
      </main>
    </>
  );
};

export default Home;
