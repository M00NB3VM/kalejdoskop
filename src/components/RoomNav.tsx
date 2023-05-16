import React from "react";
import Link from "next/link";

function RoomNav() {
  return (
    <nav className="absolute bottom-[10px] left-0 z-20 flex w-full items-end justify-start">
      <Link
        href="/roomone"
        className="mr-4 h-[100px] w-[100px] bg-[url('/milou_room_nav_active.png')] bg-contain bg-no-repeat"
      ></Link>
      <Link
        href="/roomtwo"
        className="mr-4 h-[80px] w-[80px] bg-[url('/liam_room_nav_mini.png')] bg-contain bg-no-repeat"
      ></Link>
      <Link
        href="/roomthree"
        className="mr-4 h-[80px] w-[80px] bg-[url('/polka_room_nav_mini.png')] bg-contain bg-no-repeat"
      ></Link>
    </nav>
  );
}

export default RoomNav;
