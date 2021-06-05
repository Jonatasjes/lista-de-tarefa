import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Component {...pageProps} />
        <GlobalStyles />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;
