import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { darken } from "polished";
import { IoMdPerson } from "react-icons/io";

import ContainerStyles from "./styles/ContainerStyles";
import SROnlyStyle from "./styles/SROnlyStyle";

import Logo from "./svgs/Logo";

function isActive(pathname: string): boolean {
	return (
		typeof document !== "undefined" && document.location.pathname === pathname
	);
}

const StyledBar = styled.div`
	background: ${({ theme }) => theme.colors.theme.primary};
`;

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	padding: 0 ${({ theme }) => theme.padding.lg};
	justify-content: space-between;
`;

const StyledLogoLink = styled.a`
	line-height: 1;
	svg path {
		fill: transparent;
		transition: fill 0.15s linear;
	}
	&:hover svg path {
		fill: ${({ theme }) => theme.colors.theme.secondary};
	}
`;

const StyledMain = styled.div`
	display: flex;
	align-items: baseline;
	margin-left: ${({ theme }) => theme.margin.lg};
`;

const StyledLinkWrapper = styled.div`
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

const StyledNavStart = styled.div`
	display: flex;
	align-items: center;
`;

const StyledNavEnd = styled.div`
	justify-self: flex-end;

	> a {
		display: inline-block;
		color: ${({ theme }) => theme.colors.white};
		padding: 0.4rem 0.55rem;
		line-height: 1;
		border: 1px solid ${({ theme }) => theme.colors.white};
		border-radius: 50%;
		background: transparent;
		transition: all 0.15s linear;

		&:hover {
			background: white;

			svg {
				fill: ${({ theme }) => theme.colors.theme.primary};
			}
		}
	}
`;

const HorizontalNav = () => {
	const menuItems = [
		{
			title: "Home",
			slug: "/",
		},
		{
			title: "Components",
			slug: "/components",
		},
	];

	return (
		<StyledBar>
			<ContainerStyles>
				<StyledNav>
					<StyledNavStart>
						<Link href="/">
							<StyledLogoLink title={"Home"} aria-label={"Home"}>
								<Logo width={32} height={32} />
								<SROnlyStyle>Home</SROnlyStyle>
							</StyledLogoLink>
						</Link>
						<StyledMain>
							{menuItems.map(({ title, slug }, i) => (
								<StyledLinkWrapper key={i} data-active={isActive(slug)}>
									<Link href={slug}>
										<a>{title}</a>
									</Link>
								</StyledLinkWrapper>
							))}
						</StyledMain>
					</StyledNavStart>
					<StyledNavEnd>
						<Link href="/user/name">
							<a>
								<IoMdPerson />
							</a>
						</Link>
					</StyledNavEnd>
				</StyledNav>
			</ContainerStyles>
		</StyledBar>
	);
};

export default HorizontalNav;
