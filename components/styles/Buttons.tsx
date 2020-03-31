import styled from "styled-components";
import { darken } from "polished";

export const PrimaryButton = styled.button`
	display: inline-block;
	font-size: 2rem;
	font-weight: 500;
	line-height: 1;
	color: ${({ theme }) => theme.colors.white};
	background: ${({ theme }) => theme.colors.theme.primary};
	border: 1px solid ${({ theme }) => theme.colors.theme.primary};
	padding: 1rem 3rem;
	text-align: center;
	transition: background-color 0.3s linear;

	&:hover,
	&:focus,
	&:active {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.theme.primary};
		background: transparent;
	}
`;

export const SecondaryButton = styled(PrimaryButton)`
	background: ${({ theme }) => theme.colors.theme.secondary};
	border: 1px solid ${({ theme }) => theme.colors.theme.secondary};

	&:hover,
	&:focus,
	&:active {
		color: ${({ theme }) => theme.colors.theme.secondary};
	}
`;

export const TertiaryButton = styled(PrimaryButton)`
	background: ${({ theme }) => theme.colors.theme.tertiary};
	border: 1px solid ${({ theme }) => theme.colors.theme.tertiary};

	&:hover,
	&:focus,
	&:active {
		color: ${({ theme }) => theme.colors.theme.tertiary};
	}
`;
