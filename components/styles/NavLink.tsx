import styled from "@emotion/styled";
import { darken } from "polished";

const SpanWrapper = (props) => {
	return <span {...props}></span>;
};

const NavLink = styled(SpanWrapper)`
	display: inline-block;
	background: transparent;
	border-top: 3px solid transparent;
	border-bottom: 3px solid transparent;
	transition: border-color 0.15s linear;

	&[data-active="true"] {
		background: ${({ theme }) => darken(0.05, theme.colors.gray.w300)};
	}

	&[data-active="true"],
	&:hover {
		border-bottom-color: ${({ theme }) => theme.colors.theme.tertiary};
	}

	> a {
		display: inline-block;
		color: ${({ theme }) => theme.colors.black};
		padding: ${() => (5 - 2) / 2}rem ${({ theme }) => theme.space.lg};
		font-size: 1.8rem;
		line-height: 2rem;
	}
`;

export default NavLink;
