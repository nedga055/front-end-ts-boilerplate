import React from "react";
import styled from "@emotion/styled";

import NavLink from "./styles/NavLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../utils/i18n";

const DivWrapper = (props) => <div {...props}></div>;

const StyledLangSwitcher = styled(DivWrapper)`
	list-style: none;
	display: flex;
`;

const LangSwitcher = () => {
	const { t } = useTranslation();
	const { pathname, asPath, query, locale, locales } = useRouter();
	const languagesToRender = locales.filter((lang) => lang !== locale);
	return (
		<StyledLangSwitcher>
			{languagesToRender.map((lang) => (
				<NavLink key={lang}>
					{/* Don't reload the page
						<Link href={pathname} as={asPath} locale={lang}>
							<a>{lang}</a>
						</Link>
					*/}

					{/* Reload the page
						- Necessary to reload WET header/footer/templates
					*/}
					<a href={"/" + lang + asPath}>{t(lang)}</a>
				</NavLink>
			))}
		</StyledLangSwitcher>
	);
};

export default LangSwitcher;
