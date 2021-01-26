import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

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
`
//tentativa do desafio do tema halloween, o problema que ele só coloca o tema via compilação =/
const Hoje = new Date();
const Halloween = new Date(Hoje.getFullYear(),9,31);
const theme = Hoje.getDate() === Halloween.getDate() ? db.themeHalloween : db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
