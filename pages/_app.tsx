import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import '../helpers/fontawesomeConfig';
import {StrumProvider} from 'ashton-design-system';
import {colors} from 'ashton-design-system';
import '../styles/app.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={colors.primary} />
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/public/favicon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/public/favicon-512.png" />
        <link rel="manifest" href="/public/manifest.json" />
      </Head>

      <ErrorBoundary>
        <StrumProvider>
          <Component {...pageProps} />
        </StrumProvider>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
