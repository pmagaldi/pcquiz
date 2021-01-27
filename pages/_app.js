import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import React from 'react';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
// tentativa do desafio do tema halloween, o problema que ele só coloca o tema via compilação =/
const Hoje = new Date();
const Halloween = new Date(Hoje.getFullYear(), 9, 31);
const theme = Hoje.getDate() === Halloween.getDate() ? db.themeHalloween : db.theme;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
        <meta charSet="utf-8" />
        <meta property="title" content={db.title} />
        <meta property="description" content={db.description} />
        <meta property="og:type" content={db.og.type} />
        <meta property="og:url" content={db.og.url} />
        <meta property="og:image" content={db.bg} />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
