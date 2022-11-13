import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import '../helpers/fontawesomeConfig';
import '../components/Design';
import DesignProvider from '../components/Design/components/DesignProvider/DesignProvider';
import colors from '../components/Design/themes/timbre/colors';
import '../styles/globals.scss';
import { CacheProvider } from '@emotion/react'
import createEmotionCache from "../components/Utils/createEmotionCache";
import {useMount} from "../hooks/useMount";
import { ThemeProvider } from 'next-themes';
import {CssBaseline} from "@mui/material";

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, pageProps }: AppProps) => {
    const mounted = useMount()
    if (!mounted) return

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <Head>
                <meta charSet="utf-8" />

                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/assets/favicons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/assets/favicons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/assets/favicons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/assets/favicons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/assets/favicons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/assets/favicons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/assets/favicons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/assets/favicons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/favicons/apple-icon-180x180.png"
                />
                <link rel="mask-icon" href="/assets/favicons/apple-icon-180x180.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/assets/favicons/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/assets/favicons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/assets/favicons/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content={colors.primary} />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Records Dashboard of Avataar" />

                <title>Avataar</title>
            </Head>
            <ErrorBoundary>
                <DesignProvider>
                    <ThemeProvider attribute="class" enableSystem={false}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </DesignProvider>
            </ErrorBoundary>
        </CacheProvider>
    )
}

export default App
