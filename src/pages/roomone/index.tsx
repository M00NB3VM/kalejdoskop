import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";
import RoomGrid from "~/components/RoomGrid";

import ObjectOne from "./components/ObjectOne";

function Roomone() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [showObjectOne, setShowObjectOne] = useState<boolean>(false);

  function closeModal(): void {
    setShowModal(!showModal);
  }

  return (
    <motion.div
      className="relative m-0 h-screen p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/"
        className="absolute top-0 left-0 z-30 mt-2 ml-4 h-[80px] w-[40px] cursor-pointer text-center text-white"
      >
        <Image
          src="/Char1_Door_mini.png"
          alt="Hem"
          className="max-h-full max-w-full"
        />
        <p>Exit</p>
      </Link>

      <OrganizationInfoTab />
      <RoomNav />

      <div className="relative h-screen min-w-min overflow-visible overflow-x-auto bg-[#ccc]">
        <div className="absolute h-full min-w-min">
          {showObjectOne ? (
            ""
          ) : (
            <div
              className="absolute top-[34%] left-[36%] z-40 inline-block cursor-pointer bg-accent"
              onClick={() => {
                setShowObjectOne(!showObjectOne);
              }}
            >
              Objekt nummer 1
            </div>
          )}

          <Image alt="Room" src="/Char1_Room.png" className="-z-50 max-h-full max-w-none" />

          <RoomGrid>
            <ObjectOne
              showObjectOne={showObjectOne}
              setShowObjectOne={setShowObjectOne}
            />
          </RoomGrid>

          <div className="absolute right-0 top-[45%] z-50 md:hidden">
            <p
              onClick={() => {
                setShowModal(true);
              }}
              className="inline-block origin-bottom-right -rotate-90 cursor-pointer rounded-t-lg bg-secondary px-[20px] py-1 text-xl font-bold tracking-wider text-accent"
            >
              Läs&nbsp;mig
            </p>
          </div>
        </div>

        {showModal ? <OrganizationInfoModal closeModal={closeModal} /> : <></>}
      </div>
    </motion.div>
  );
}

export default Roomone;
