import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { dayTheme } from "../theme";
import { StylesProvider } from "@material-ui/core/styles";
import { wrapper } from "../store";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>NextJs Material UI</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={dayTheme}>
        <StylesProvider injectFirst>
          {/* Now, you can override Material-UI's styles. */}
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default wrapper.withRedux(MyApp);
