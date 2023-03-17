import React from "react";

import DoorBackButton from "~/components/DoorBackButton";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import RoomNav from "~/components/RoomNav";

function Roomone() {
  return (
    <div className="relative m-0 min-h-screen p-0">
      <DoorBackButton />
      <OrganizationInfoTab />
      <RoomNav />

      <div className="min-w-screen relative flex h-screen overflow-visible overflow-x-scroll md:hidden">
        <img src="/room.png" className=" h-full max-w-none" />
        <div className="h-full min-w-[40px] bg-secondary md:hidden">
          <p className="absolute top-[50%] inline-block w-2 -rotate-90 font-bold tracking-wider text-accent">
            Läs&nbsp;mig
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roomone;
