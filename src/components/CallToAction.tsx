import React from "react";

import { BsDownload } from "react-icons/bs";

function CallToAction() {
  return (
    <>
      <div className="flex justify-center">
        <img src="" alt="Logotyp" />
        <h1 className="text-xl">Kalejdoskop</h1>
      </div>

      <div className="flex justify-center">
        <button className="m-4 transform rounded-full bg-accent px-6 py-2 text-lg text-white shadow-md transition duration-500 hover:scale-110 hover:bg-accentHover">
          <a href="" download="Namn_på_spel.exe" className="flex items-center">
            Ladda ner <BsDownload className="ml-2" />
          </a>
        </button>
      </div>
    </>
  );
}

export default CallToAction;
