import React from "react";

import DoorBackButton from "~/components/DoorBackButton";
import OrganizationInfoTab from "~/components/OrganizationInfoTab";
import RoomNav from "~/components/RoomNav";

function Roomone() {
  return (
    <div>
      <h1>Rum ett</h1>
      <DoorBackButton />
      <OrganizationInfoTab />
      <RoomNav />
    </div>
  );
}

export default Roomone;
