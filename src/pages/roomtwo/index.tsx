import React, { useState } from "react";
import { motion } from "framer-motion";

import DoorBackButton from "~/components/DoorBackButton";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";

function Roomtwo() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function closeModal(): void {
setShowModal(!showModal)
  }
  return (
    <motion.div className="relative m-0 min-h-screen p-0" initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}>
      <DoorBackButton />
      <OrganizationInfoTab />
      <RoomNav />

      <div className="min-w-screen flex h-screen overflow-visible overflow-x-scroll">
        <img src="/room.png" className=" h-full max-w-none" />

        <div className="relative md:hidden h-full">
          <p onClick={() => {setShowModal(true)}} className="absolute top-[50%] -right-[50px] text-2xl inline-block -rotate-90 font-bold tracking-wider text-accent bg-secondary rounded-t-lg px-[20px] py-1">
            Läs&nbsp;mig
          </p>
        </div>
        {showModal ? (<OrganizationInfoModal closeModal={closeModal} />) : (<></>)}
      </div>
    </motion.div>
  );
}
export default Roomtwo;
