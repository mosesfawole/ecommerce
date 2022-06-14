import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <div className="layout">
        <Head>
          <title>MF Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>

        <Footer />
      </div>
    </React.StrictMode>
  );
};

export default Layout;
