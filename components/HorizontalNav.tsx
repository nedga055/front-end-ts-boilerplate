import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { darken } from "polished";
import { IoMdPerson } from "react-icons/io";
import Link from "next/link";
import { Button, useColorMode } from "@chakra-ui/react";

import { useBreakpoint } from "../hooks/useBreakpoint";
import { useTranslation } from "../utils/i18n";
import { useToggleOpen } from "../hooks/useToggleOpen";

import Container from "./styles/Container";
import SROnly from "./styles/SROnly";
import NavLink from "./styles/NavLink";

import Logo from "./svgs/Logo";
import MenuToggle from "./svgs/MenuToggle";
import LangSwitcher from "./LangSwitcher";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { TertiaryButton } from "./styles/Buttons";

function isActive(pathname: string): boolean {
	const router = useRouter();
	return router.pathname === pathname;
}

const BasicDivWrapper = (props) => {
	return <div {...props}></div>;
};

const StyledBar = styled(BasicDivWrapper)`
	background: ${({ theme }) => theme.colors.gray.w200};
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray.w600};
	z-index: 3;
`;

const StyledNav = styled((props) => <nav {...props}></nav>)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	padding: 0 ${({ theme }) => theme.padding.lg};
`;

const PreStyledLogoLink = styled((props) => <a {...props}></a>)`
	line-height: 1;
	padding: 1.05rem 0;

	svg path {
		fill: transparent;
		transition: fill 0.15s linear;
	}
	&:hover svg path {
		fill: ${({ theme }) => theme.colors.theme.secondary};
	}
`;

// Forward ref error fix
const StyledLogoLink = React.forwardRef((props: { children?; title }, ref) => (
	<PreStyledLogoLink {...props}></PreStyledLogoLink>
));
StyledLogoLink.displayName = "StyledLogoLink";

const StyledMain = styled(BasicDivWrapper)`
	display: flex;
	align-items: baseline;
	margin-left: ${({ theme }) => theme.margin.lg};
`;

const StyledNavStart = styled(BasicDivWrapper)`
	display: flex;
	align-items: center;
`;

const StyledNavEnd = styled(BasicDivWrapper)`
	justify-self: flex-end;
	display: flex;
	align-items: center;

	> div,
	> ul {
		margin: 0 ${({ theme }) => theme.margin.md};
	}

	> button {
		display: flex;
		color: ${({ theme }) => theme.colors.black};
	}

	> div > a {
		display: inline-block;
		color: ${({ theme }) => theme.colors.black};
		padding: 0.55rem 0.55rem;
		line-height: 1;
		border: 1px solid ${({ theme }) => theme.colors.black};
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

const StyledNavBottom = styled(BasicDivWrapper)`
	align-items: center;
	display: flex;

	> div {
		> a {
			display: inline-block;
			color: ${({ theme }) => theme.colors.black};
			padding: 0.55rem 0.55rem;
			line-height: 1;
			border: 1px solid ${({ theme }) => theme.colors.black};
			border-radius: 50%;
			background: transparent;
			transition: all 0.15s linear;
		}
	}
`;

const StyledMobileMenu = styled(BasicDivWrapper)`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 100%;
	background: ${({ theme }) => theme.colors.gray.w200};
	margin: 0 -1.5rem;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.gray.w600};
	border-top: none;

	${StyledMain} {
		flex-direction: column;
		margin-left: 0;
		width: 100%;
	}

	${NavLink} {
		display: block;
		width: 100%;
		border-bottom: none;
		border-top: none;
		border-left: 5px solid transparent;

		> a {
			width: 100%;
		}

		&[data-active="true"],
		&:hover {
			border-left-color: ${({ theme }) => theme.colors.theme.tertiary};
			border-bottom: none;
		}
	}
`;

const HorizontalNav = function (props) {
	const { t } = useTranslation();
	const mobileMenuBreakpoints = ["xs", "sm", "md"];
	const breakpoint = useBreakpoint();
	const { isOpen, setIsOpen } = useToggleOpen(false);
	const { colorMode, toggleColorMode } = useColorMode();

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
			<Container>
				<StyledNav>
					{mobileMenuBreakpoints.includes(breakpoint) && (
						<>
							<StyledNavStart>
								<Link href="/">
									<StyledLogoLink title={t("home")} aria-label={t("home")}>
										<Logo width={32} height={32} />
										<SROnly>{t("home")}</SROnly>
									</StyledLogoLink>
								</Link>
							</StyledNavStart>
							<StyledNavEnd>
								<MenuToggle
									label={t("common.menu-toggle")}
									width={32}
									height={32}
									setIsOpen={setIsOpen}
									isOpen={isOpen}
								/>
							</StyledNavEnd>
							{isOpen && (
								<StyledMobileMenu aria-live="polite">
									<StyledMain>
										{menuItems.map(({ title, slug }, i) => (
											<NavLink key={i} data-active={isActive(slug)}>
												<Link href={slug}>
													<a onClick={() => setIsOpen(false)}>{title}</a>
												</Link>
											</NavLink>
										))}
									</StyledMain>
									<StyledNavBottom>
										<LangSwitcher />
										<div>
											<Link href="/user/name">
												<a
													onClick={() => setIsOpen(false)}
													title={t("profile")}
													aria-label={t("profile")}
												>
													<IoMdPerson />
													<SROnly>{t("profile")}</SROnly>
												</a>
											</Link>
										</div>
										<div>
											<TertiaryButton
												aria-live="polite"
												onClick={toggleColorMode}
											>
												{colorMode == "dark" ? (
													<>
														<SunIcon></SunIcon>
														<SROnly>{t("switch-dark-mode")}</SROnly>
													</>
												) : (
													<>
														<MoonIcon></MoonIcon>
														<SROnly>{t("switch-light-mode")}</SROnly>
													</>
												)}
											</TertiaryButton>
										</div>
									</StyledNavBottom>
								</StyledMobileMenu>
							)}
						</>
					)}

					{mobileMenuBreakpoints.includes(breakpoint) === false && (
						<>
							<StyledNavStart>
								<Link href="/">
									<StyledLogoLink title={t("home")} aria-label={t("home")}>
										<Logo width={32} height={32} />
										<SROnly>{t("home")}</SROnly>
									</StyledLogoLink>
								</Link>
								<StyledMain>
									{menuItems.map(({ title, slug }, i) => (
										<NavLink key={i} data-active={isActive(slug)}>
											<Link href={slug}>
												<a>{title}</a>
											</Link>
										</NavLink>
									))}
								</StyledMain>
							</StyledNavStart>
							<StyledNavEnd>
								<LangSwitcher />
								<div>
									<Link href="/user/name">
										<a title={t("profile")} aria-label={t("profile")}>
											<IoMdPerson />
											<SROnly>{t("profile")}</SROnly>
										</a>
									</Link>
								</div>
								<div>
									<TertiaryButton aria-live="polite" onClick={toggleColorMode}>
										{colorMode == "dark" ? (
											<>
												<SunIcon></SunIcon>
												<SROnly>{t("switch-dark-mode")}</SROnly>
											</>
										) : (
											<>
												<MoonIcon></MoonIcon>
												<SROnly>{t("switch-light-mode")}</SROnly>
											</>
										)}
									</TertiaryButton>
								</div>
							</StyledNavEnd>
						</>
					)}
				</StyledNav>
			</Container>
		</StyledBar>
	);
};

export default HorizontalNav;
