// import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/nav/nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
