import React, { Component, ReactNode } from "react";

import styled from "@emotion/styled";

import { Theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Container from "./styles/Container";

import Meta from "./Meta";
import HorizontalNav from "./HorizontalNav";

import {
	Box,
	ChakraProvider,
	extendTheme,
	useColorModeValue,
} from "@chakra-ui/react";

const StyledPage = styled((props) => <Box {...props}></Box>)`
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: background-color 0.3s ease;
	background-color: ${({ theme }) =>
		useColorModeValue(theme.colors.gray.w100, theme.colors.gray.w700)};
`;

const Inner = styled.div`
	padding: 2rem 2rem 10rem;
`;

const ChakraTheme = extendTheme(Theme);

type Props = {
	children: ReactNode;
};

class Page extends Component<Props> {
	render() {
		return (
			<ChakraProvider theme={ChakraTheme}>
				<GlobalStyle />
				<StyledPage>
					<Meta />
					<HorizontalNav />
					<Container>
						<Inner>{this.props.children}</Inner>
					</Container>
				</StyledPage>
			</ChakraProvider>
		);
	}
}

export default Page;
