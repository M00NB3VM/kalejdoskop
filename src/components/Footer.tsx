import React from "react";

import { useStoreContext } from "~/context";

function Footer() {
  const { darkTheme } = useStoreContext();

  return (
    <footer className="max-w-screen border-t-[1px] border-primary">
      {darkTheme ? (
        <div className="ml-4 mr-4 flex min-h-[80px] flex-wrap items-center justify-around">
          <img
            className="mb-2 mt-2 max-h-[40px] max-w-[100%] md:max-h-[55px]"
            src="/Logotype.png"
            alt="Kalejdoskops logga"
          />
          <img
            className="mb-2 mt-2 max-h-[40px] max-w-[100%] md:ml-auto md:max-h-[55px]"
            src="med_stod_fran_allmanna_arvsfonden_negativ.png"
            alt="Allmänna arvsfondens logotyp"
          />
        </div>
      ) : (
        <div className="ml-4 mr-4 flex min-h-[80px] flex-wrap items-center justify-around">
          <img
            className="mb-2 mt-2 max-h-[40px] max-w-[100%] md:max-h-[55px]"
            src="/Logotype.png"
            alt="Kalejdoskops logga"
          />
          <img
            className="mb-2 mt-2 max-h-[40px] max-w-[100%] md:ml-auto md:max-h-[55px]"
            src="med_stod_fran_allmanna_arvsfonden_positiv.png"
            alt="Allmänna arvsfondens logotyp"
          />
        </div>
      )}
    </footer>
  );
}

export default Footer;
