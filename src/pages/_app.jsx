import React from 'react';
import { useStore, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';

import wrapper from '../store';
import theme from '../styles/theme';
import Layout from '../layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(state => state);
  const token = useSelector(state => state.auth.token);

  return (
    <PersistGate persistor={store.__persistor}>
      <ChakraProvider theme={theme}>
        {token ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
