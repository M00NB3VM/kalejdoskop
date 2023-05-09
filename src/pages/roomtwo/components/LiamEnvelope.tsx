import React from "react";
import Link from "next/link";

interface Props {
  showObject: boolean;
  setShowObject: (arg0: boolean) => void;
}

function LiamEnvelope({ showObject, setShowObject }: Props) {
  return (
    <>
      {showObject ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 overflow-auto md:absolute md:top-[10%] md:left-[65%] md:min-h-0 md:max-w-[290px]">
          <ul className="min-h-full bg-secondary p-4 md:h-auto md:min-h-0 md:rounded-2xl md:border-b-[6px] md:border-b-accent">
            <li>
              <button
                className="mt-1 ml-auto mr-1 block rounded-full bg-accent py-2 px-4 font-['Documan_heavy'] text-white"
                onClick={() => {
                  setShowObject(!showObject);
                }}
              >
                STÄNG
              </button>
            </li>
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
      ) : (
        ""
      )}
    </>
  );
}

export default LiamEnvelope;
