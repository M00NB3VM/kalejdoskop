import Head from "next/head";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

import Button from "~/components/Button";

function About() {
  return (
    <>
      <Head>
        <title>Om Kalejdoskop</title>
      </Head>
      <main>
        <Button text="Hem">
          <Link href="/">
            <BsChevronLeft />
            Hem
          </Link>
        </Button>
        <div>Om</div>
      </main>
    </>
  );
}

export default About;
