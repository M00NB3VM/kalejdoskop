import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function RoomNav() {
  const router = useRouter();

  return (
    <nav className="flex">
      <Link
        href="/roomone"
        className="m-4"
        style={{ color: router.pathname === "/roomone" ? "red" : "black" }}
      >
        Rum 1
      </Link>
      <Link
        href="/roomtwo"
        className="m-4"
        style={{ color: router.pathname === "/roomtwo" ? "red" : "black" }}
      >
        Rum 2
      </Link>
      <Link
        href="/roomthree"
        className="m-4"
        style={{ color: router.pathname === "/roomthree" ? "red" : "black" }}
      >
        Rum 3
      </Link>
    </nav>
  );
}

export default RoomNav;
