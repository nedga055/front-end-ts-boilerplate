import styled from "styled-components";
import { darken } from "polished";

const NavLink = styled.div`
	display: inline-block;
	background: transparent;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	transition: border-color 0.15s linear;

	&[data-active="true"] {
		background: ${({ theme }) => darken(0.05, theme.colors.theme.primary)};
	}

	&[data-active="true"],
	&:hover {
		border-bottom-color: ${({ theme }) => theme.colors.theme.tertiary};
	}

	> a {
		display: inline-block;
		color: ${({ theme }) => theme.colors.white};
		padding: ${() => (5 - 2) / 2}rem ${({ theme }) => theme.padding.lg};
		font-size: 1.8rem;
		line-height: 2rem;
		text-transform: lowercase;
	}
`;

export default NavLink;
