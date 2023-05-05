import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";
import RoomGrid from "~/components/RoomGrid";

function Roomthree() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function closeModal(): void {
    setShowModal(!showModal);
  }

  return (
    <motion.div
      className="relative m-0 min-h-screen p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/"
        className="absolute left-0 top-0 z-30 ml-4 mt-2 h-[80px] w-[40px] cursor-pointer text-center text-white"
      >
        <img
          src="/Char3_Door_mini.png"
          alt="Hem"
          className="max-h-full max-w-full"
        />
        <p>Exit</p>
      </Link>

      <OrganizationInfoTab />
      <RoomNav />

      <div className="min-w-screen relative flex h-screen overflow-visible overflow-x-auto bg-[#000]">
        <div className="relative h-full min-w-min">
          <img
            alt="Room"
            src="/Char3_Room.png"
            className="-z-50 max-h-full max-w-none"
          />
          <RoomGrid>
            <div></div>
          </RoomGrid>
        </div>

        <div className="relative z-50 h-full md:hidden">
          <p
            onClick={() => {
              setShowModal(true);
            }}
            className="absolute -right-[43px] top-[50%] inline-block -rotate-90 cursor-pointer rounded-t-lg bg-secondary px-[20px] py-1 text-xl font-bold tracking-wider text-accent"
          >
            Läs&nbsp;mig
          </p>
        </div>
        {showModal ? <OrganizationInfoModal closeModal={closeModal} /> : <></>}
      </div>
    </motion.div>
  );
}
export default Roomthree;
