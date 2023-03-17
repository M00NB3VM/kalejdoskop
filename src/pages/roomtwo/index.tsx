import React from "react";

import DoorBackButton from "~/components/DoorBackButton";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import RoomNav from "~/components/RoomNav";

function Roomtwo() {
  return (
    <div className="relative m-0 min-h-screen p-0">
      <h1>Rum två</h1>
      <DoorBackButton />
      <OrganizationInfoTab />
      <RoomNav />
    </div>
  );
}
export default Roomtwo;
