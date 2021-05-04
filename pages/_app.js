import App from "next/app";
import LayoutWrapper from "../layouts/default";

import "../styles/scss/style.scss";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    );
  }
}
