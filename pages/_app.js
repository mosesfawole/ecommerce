import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </React.StrictMode>
  );
}

export default MyApp;
