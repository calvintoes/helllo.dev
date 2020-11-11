import { createGlobalStyle } from 'styled-components';
import { colors } from './constants/colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2 {
    font-family: 'Open Sans', sans-serif;
  },

  h1 {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  body {
    background-color: ${colors.white};
    color: ${colors.black};
    font-family: 'Nunito Sans', sans-serif;
  },

`;