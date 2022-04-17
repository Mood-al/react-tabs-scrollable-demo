import "../styles/globals.css";

import { RTLProvider } from "../context/RTLContext";
import Head from "next/head";
import "../styles/rn-tabs.css";
import "../styles/main.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <RTLProvider>
        <Layout>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </Layout>
      </RTLProvider>
    </>
  );
}

export default MyApp;
