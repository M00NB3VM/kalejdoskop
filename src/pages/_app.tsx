import { type AppType } from "next/app";
import { Open_Sans } from "next/font/google";

import { api } from "~/utils/api";

import { StoreProvider } from "~/context";

import "~/styles/globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <div className={openSans.className}>
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  );
};

export default api.withTRPC(MyApp);
