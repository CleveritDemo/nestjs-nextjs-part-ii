// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'rsuite/dist/styles/rsuite-default.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;