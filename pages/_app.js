import App from "next/app";
import Head from "next/head";
import React from "react";

import "../public/sass/reset.scss";
import desc from "../description.json";

export default class RootApp extends App {
  componentDidCatch(error, errorInfo) {
    console.log("CUSTOM ERROR HANDLING", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }
  render() {
    const { Component, ...pageProps } = this.props;
    return (
      <>
        <Head>
          <title>{desc.title}</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}