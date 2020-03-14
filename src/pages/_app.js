// Custom app for persiting layout to all pages. @see https://nextjs.org/docs/advanced-features/custom-app
import Head from "next/head";
import "./../styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "../components/Appbar";

function MyApp({ Component, pageProps }) {
  // Update the theme base on the users prefered setting.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#000000"
          },
          secondary: {
            main: "#4db6ac"
          }
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <AppBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
