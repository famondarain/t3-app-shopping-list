import { type AppType } from "next/app";

import { api } from "t3-project/utils/api";

import "t3-project/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
