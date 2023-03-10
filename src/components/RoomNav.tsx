import React from "react";
import Link from "next/link";

function RoomNav() {
  return (
    <nav className="flex">
      <Link href="/roomone" className="m-4">
        Rum 1
      </Link>
      <Link href="/roomtwo" className="m-4">
        Rum 2
      </Link>
      <Link href="/roomthree" className="m-4">
        Rum 3
      </Link>
    </nav>
  );
}

export default RoomNav;
