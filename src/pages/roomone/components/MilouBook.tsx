"use client";

import React, { useEffect } from "react";

import ChartTwoMilou from "./ChartTwoMilou";
import ChartThreeMilou from "./ChartThreeMilou";
import ChartFourMilou from "./ChartFourMilou";

interface Props {
  showObject: boolean;
  setShowObject: (arg0: boolean) => void;
}

function MilouBook({ showObject, setShowObject }: Props) {
  useEffect(() => {
    const element = document.getElementById("milou-book");

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
          id="milou-book"
          className=" fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto md:absolute md:top-[35%] md:left-[43%] md:mb-[170px] md:min-h-0 md:w-[340px]"
        >
          <div className=" h-full w-[320px] bg-secondary p-4 md:rounded-2xl md:border-b-[6px] md:border-b-accent">
            <ul className="object-modal max-h-full overflow-auto pr-4">
              <li>
                <button
                  className="mt-1 ml-auto mr-2 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-white"
                  onClick={() => {
                    setShowObject(!showObject);
                  }}
                >
                  STÄNG
                </button>
              </li>
              <li>
                <p>Spelarna valde att:</p>
                <ChartTwoMilou />
                <p>Spelarna valde att:</p>
                <ChartThreeMilou />

                <ChartFourMilou />
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

export default MilouBook;
