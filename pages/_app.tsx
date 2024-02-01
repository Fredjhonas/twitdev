import { Provider } from "react-redux";
import { store } from "store";
import type { AppProps } from "next/app";

import "globals.css";
import AppLayout from "components/AppLayout";
import { ThemeProvider } from "@material-tailwind/react";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
      <AppLayout>
        <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
