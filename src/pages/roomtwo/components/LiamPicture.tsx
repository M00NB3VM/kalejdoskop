"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface Props {
  showObject: boolean;
  setShowObject: (arg0: boolean) => void;
}

function LiamPicture({ showObject, setShowObject }: Props) {
  useEffect(() => {
    const element = document.getElementById("liam-picture");

    if (showObject === true) {
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  }, [showObject]);
  return (
    <>
      {showObject ? (
        <div
          id="liam-picture"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-secondary md:absolute md:top-[10%] md:left-[78%] md:bottom-[60%] md:min-h-0 md:w-[350px] md:bg-transparent"
        >
          <div className="relative mb-20 h-full overflow-hidden bg-secondary md:w-[330px] md:rounded-2xl md:border-b-[6px] md:border-b-accent md:p-4">
            <button
              className="absolute top-2 right-2 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-sm text-white"
              onClick={() => {
                setShowObject(!showObject);
              }}
            >
              STÄNG
            </button>
            <ul className="object-modal relative mx-4 mt-20 max-h-[90%] overflow-y-scroll pr-4 md:mx-0 md:mt-10">
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur corrupti quos impedit a, repellendus quam nemo
                  nesciunt sunt. Veritatis magni illo, unde delectus soluta
                  quaerat tempora nemo molestias quidem sed.
                </p>
                <Link href="#">Länk till organisation</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default LiamPicture;
