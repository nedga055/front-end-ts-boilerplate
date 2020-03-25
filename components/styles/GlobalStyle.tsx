import { createGlobalStyle } from "styled-components";

// import RalewayRegular from "../../data/fonts/raleway-v14-latin-regular.ttf";

const GlobalStyle = createGlobalStyle`

/* raleway-regular - latin */
@font-face {
    font-family: 'Raleway';
    src: url("../../static/raleway-v14-latin-regular.woff2")
    format('woff2');
    font-weight: 400;
    font-style: normal;
}

html {
  box-sizing: border-box;
  font-size: 10px;
  height: 100%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  font-size: 1.5rem;
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