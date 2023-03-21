import React, { useState } from "react";

import DoorBackButton from "~/components/DoorBackButton";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import OrganizationInfoModal from "~/components/OrganizationInfoModal";
import RoomNav from "~/components/RoomNav";

function Roomone() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function closeModal(): void {
setShowModal(!showModal)
  }

  return (
    <div className="relative m-0 min-h-screen p-0">
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
    </div>
  );
}

export default Roomone;
