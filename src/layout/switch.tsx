import React from 'react';
import type { AppProps } from 'next/app';

import Layout from './layout';
import { useAuth } from '../contexts/auth';

const Switch = ({ Component, pageProps }: AppProps) => {
  const { signed } = useAuth();

  if (signed) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

  return (
    <Component {...pageProps} />
  );
};

export default Switch;
