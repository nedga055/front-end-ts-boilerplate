import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// Light Italic
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: local('Raleway Light Italic'), local('Raleway-LightItalic'), url("../../fonts/raleway/Raleway-LightItalic.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
// Italic
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local('Raleway Italic'), local('Raleway-Italic'), url("../../fonts/raleway/Raleway-Italic.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
// Bold Italic
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'), url("../../fonts/raleway/Raleway-BoldItalic.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
// Light
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Raleway Light'), local('Raleway-Light'), url("../../fonts/raleway/Raleway-Light.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
// Regular
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Raleway'), local('Raleway-Regular'), url("../../fonts/raleway/Raleway-Regular.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
// Bold
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Raleway Bold'), local('Raleway-Bold'), url("../../fonts/raleway/Raleway-Bold.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html {
  box-sizing: border-box;
  font-size: 10px; // This allows you to easily use rems by using a multiplier to set sizes. Ex: 1.7rem would equal 17px
  height: 100%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  line-height: 2;
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Raleway';
}

#__next {
  height: 100%;
}
`;

export default GlobalStyle;
