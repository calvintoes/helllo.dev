import { createGlobalStyle } from 'styled-components';
import { colors } from './constants/colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2 {
    font-family: 'Poppins', sans-serif;
    color: #000;
  }

  h1 {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.textBlack};
  }

  body {
    background-color: ${colors.baseBackground};
    color: ${colors.textBlack};
    font-family: 'Nunito Sans', sans-serif;
  }

  main {
    @media only screen and (min-width: 2047px) {
        width: 1440px;
        margin: 0 auto;
    }
  }

`;
