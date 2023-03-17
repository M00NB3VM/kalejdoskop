import React from "react";
import Link from "next/link";

function DoorBackButton() {
  return (
    <div>
      <Link
        href="/"
        className="absolute top-0 left-0 z-10 m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white transition duration-500 hover:bg-accentHover"
      >
        Hem
      </Link>
    </div>
  );
}

export default DoorBackButton;
