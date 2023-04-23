import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function RoomNav() {
  const router = useRouter();

  return (
    <nav className="absolute bottom-0 left-0 z-20 flex w-full justify-center md:justify-start">
      <Link
        href="/roomone"
        className="m-4"
        style={{ color: router.pathname === "/roomone" ? "red" : "white" }}
      >
        Rum 1
      </Link>
      <Link
        href="/roomtwo"
        className="m-4"
        style={{ color: router.pathname === "/roomtwo" ? "red" : "white" }}
      >
        Rum 2
      </Link>
      <Link
        href="/roomthree"
        className="m-4"
        style={{ color: router.pathname === "/roomthree" ? "red" : "white" }}
      >
        Rum 3
      </Link>
    </nav>
  );
}

export default RoomNav;
