import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import wrapper from '../store';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(state => state);
  return (
    <PersistGate persistor={store.__persistor}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
