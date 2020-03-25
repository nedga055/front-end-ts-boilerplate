import React, {Component} from 'react';

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { Theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";

import Navigation from "./Navigation";

const StyledPage = styled.div`
  height: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 60px 1fr;
  grid-template-columns: 60px 1fr;
  -ms-grid-rows: 1fr;
  grid-template-rows: 1fr;
  
  > *:nth-child(1) {
      -ms-grid-row: 1;
      -ms-grid-column: 1;
  }
  > *:nth-child(2) {
      -ms-grid-row: 1;
      -ms-grid-column: 2;
  }
`;

const Inner = styled.div`
  padding: 0 2rem;
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <StyledPage>
                    <Navigation/>
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;