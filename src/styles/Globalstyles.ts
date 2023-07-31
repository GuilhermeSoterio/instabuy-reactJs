import { createGlobalStyle } from 'styled-components';

// Defina as suas variáveis de cores
const greenColor = '#43b02a';
const redColor = '#e91e63';
const grayColor = '#707070'
const grayPrimaryColor = 'rgb(233, 233, 233)'
const grayHoverColor = 'rgb(198, 198, 198)'
const grayActiveColor = '#d2d2d2'

// Defina o estilo global
const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: #F9F9F9;
    font-family:"Poppins", "Cortana", "sans-serif";
  }

  :root {
    --ib-colors-brand-primary: ${greenColor};
    --ib-colors-brand-tertiary: ${redColor};
    --ib-colors-gray-dark: ${grayColor};
    --gray-primary: ${grayPrimaryColor};
    --gray-hover: ${grayHoverColor};
    --gray-active: ${grayActiveColor};
  }
`;

export default GlobalStyles;