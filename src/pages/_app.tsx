import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '../contexts/auth';
import theme from '../styles/theme';
import Switch from '../layout/switch';

const MyApp = (appProps: AppProps) => {
  return (
    <>
      <Head>
        <title>jobbing - Plataforma de Empregos</title>
      </Head>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Switch {...appProps} />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
