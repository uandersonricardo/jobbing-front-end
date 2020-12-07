import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStore, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import wrapper from '../store';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Layout from '../layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(state => state);
  const token = useSelector(state => state.auth.token);

  return (
    <PersistGate persistor={store.__persistor}>
      <ThemeProvider theme={theme}>
        {token ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
