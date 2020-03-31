import React, { Component, ReactNode } from "react";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { Theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Container from "./styles/Container";

import HorizontalNav from "./HorizontalNav";

const StyledPage = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Inner = styled.div`
	padding: 0 2rem 10rem;
`;

type Props = {
	children: ReactNode;
};

class Page extends Component<Props> {
	render() {
		return (
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<StyledPage>
					<HorizontalNav />
					<Container>
						<Inner>{this.props.children}</Inner>
					</Container>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
