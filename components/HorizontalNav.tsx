import React from "react";
import { Link } from "../i18n";
import styled from "styled-components";
import { darken } from "polished";
import { IoMdPerson } from "react-icons/io";
import { useTranslation } from "../utils/i18n";

import ContainerStyles from "./styles/ContainerStyles";
import SROnlyStyle from "./styles/SROnlyStyle";
import NavLinkStyle from "./styles/NavLinkStyle";

import Logo from "./svgs/Logo";
import LangSwitcher from "./LangSwitcher";

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

const StyledNavStart = styled.div`
	display: flex;
	align-items: center;
`;

const StyledNavEnd = styled.div`
	justify-self: flex-end;
	display: flex;
	align-items: center;

	> div,
	> ul {
		margin: 0 ${({ theme }) => theme.margin.md};
	}

	> div > a {
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

const HorizontalNav = (props) => {
	const { t } = useTranslation();
	const menuItems = [
		{
			title: t("home"),
			slug: "/",
		},
		{
			title: t("components"),
			slug: "/components",
		},
	];

	return (
		<StyledBar>
			<ContainerStyles>
				<StyledNav>
					<StyledNavStart>
						<Link href="/">
							<StyledLogoLink title={t("home")} aria-label={t("home")}>
								<Logo width={32} height={32} />
								<SROnlyStyle>{t("home")}</SROnlyStyle>
							</StyledLogoLink>
						</Link>
						<StyledMain>
							{menuItems.map(({ title, slug }, i) => (
								<NavLinkStyle key={i} data-active={isActive(slug)}>
									<Link href={slug}>
										<a>{title}</a>
									</Link>
								</NavLinkStyle>
							))}
						</StyledMain>
					</StyledNavStart>
					<StyledNavEnd>
						<LangSwitcher />
						<div>
							<Link href="/user/name">
								<a>
									<IoMdPerson />
								</a>
							</Link>
						</div>
					</StyledNavEnd>
				</StyledNav>
			</ContainerStyles>
		</StyledBar>
	);
};

export default HorizontalNav;
