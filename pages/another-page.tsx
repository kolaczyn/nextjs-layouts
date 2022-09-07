import React from "react";
import { Footer, Navbar } from "../src/components";
import { NextPageWithLayout } from "./_app";

const AnotherPage: NextPageWithLayout = () => {
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
