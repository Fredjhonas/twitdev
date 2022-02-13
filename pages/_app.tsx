import { Provider } from "react-redux";
import { store } from "store";
import type { AppProps } from "next/app";

import "globals.css";
import AppLayout from "components/AppLayout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

export default MyApp;
