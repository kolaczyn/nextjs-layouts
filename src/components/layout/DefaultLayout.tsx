import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const DefaultLayout = (page: React.ReactNode) => (
  <>
    <Navbar />
    <main>{page}</main>
    <Footer />
  </>
);
