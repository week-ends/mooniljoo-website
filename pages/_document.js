import Document, { Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Footer from "../components/Footer";

import desc from "../description.json";
export default class RootDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" href="/favicon.ico" />
          {/* OpenGraph */}
          <meta property="og:type" content={desc.type} />
          <meta property="og:locale" content={desc.locale} />
          <meta property="og:title" content={desc.title} />
          <meta property="og:site_name" content={desc.sitename} />
          <meta property="og:description" content={desc.description} />
          <meta property="og:image" content={desc.image} />
          <meta property="og:url" content={desc.url} />

          <style global jsx>
            {`
              body {
                background: #f1f1f1;
              }

              html,
              body,
              #__next {
                height: 100%;
                width: 100%;
                font-family: "RobotoSlab";
                color: #333;

                font-variation-settings: "wght" 400;
                font-weight: 400;
                font-size: 100%;
                -webkit-text-size-adjust: 100%;
                font-variant-ligatures: none;
                -webkit-font-variant-ligatures: none;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: unset;
                -moz-osx-font-smoothing: grayscale;
                font-smoothing: antialiased;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                backface-visibility: hidden;
                text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
                -webkit-text-stroke: 0.001em;
                /* line-height: 1.5em; */
                letter-spacing: -0.03em;
                color: #333;
              }

              @font-face {
                font-family: "RobotoSlab";
                src: url("/fonts/RobotoSlab-Thin.ttf");
                font-weight: 100;
              }
              @font-face {
                font-family: "RobotoSlab";
                src: url("/fonts/RobotoSlab-Light.ttf");
                font-weight: 300;
              }
              @font-face {
                font-family: "RobotoSlab";
                src: url("/fonts/RobotoSlab-Regular.ttf");
                font-weight: 400;
              }
              @font-face {
                font-family: "RobotoSlab";
                src: url("/fonts/RobotoSlab-Medium.ttf");
                font-weight: 500;
              }
              @font-face {
                font-family: "RobotoSlab";
                src: url("/fonts/RobotoSlab-Bold.ttf");
                font-weight: 700;
              }
              @font-face {
                font-family: "RobotoSlab";
                src: url("/fonts/RobotoSlab-Black.ttf");
                font-weight: 900;
              }
            `}
          </style>
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}