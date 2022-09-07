import { DefaultLayout } from "../src/components";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? DefaultLayout;

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
