import React from "react";
import Link from "next/link";

interface Room {
  name: string;
  path: string;
}

function EnterRoom() {
  const rooms: Room[] = [
    { name: "Room One", path: "/roomone" },
    { name: "Room Two", path: "/roomtwo" },
    { name: "Room Three", path: "/roomthree" },
  ];

  return (
    <nav>
      <ul className="flex flex-col">
        {rooms.map((room) => {
          return (
            <li key={room.name} className="m-4">
              <Link
                href={room.path}
                className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
              >
                {room.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default EnterRoom;
