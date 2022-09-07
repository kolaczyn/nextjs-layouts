import React from "react";
import { Footer, Navbar } from "../src/components";

const AnotherPage = () => {
  return (
    <>
      <button className="btn">This is another page</button>
    </>
  );
};

AnotherPage.getLayout = (page: React.ReactNode) => (
  <>
    <Navbar />
    <main>{page}</main>
    <p>there is no footer</p>
  </>
);

export default AnotherPage;
