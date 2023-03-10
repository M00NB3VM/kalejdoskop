import React from "react";
import Head from "next/head";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

function About() {
  return (
    <>
      <Head>
        <title>Om Kalejdoskop</title>
      </Head>
      <main>
        <Link
          href="/"
          className="m-4 flex w-[130px] transform flex-row items-center justify-center rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
        >
          <BsChevronLeft />
          Tillbaka
        </Link>

        <div>Om</div>
      </main>
    </>
  );
}

export default About;
