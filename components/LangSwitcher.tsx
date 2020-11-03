import React from "react";
import styled from "styled-components";

import NavLink from "./styles/NavLink";
import Link from "next/link"
import {useRouter} from 'next/router'

const StyledLangSwitcher = styled.div`
	list-style: none;
	display: flex;
`;

const LangSwitcher = () => {
	const {pathname, asPath, query, locale, locales} = useRouter();
	const languagesToRender = locales.filter((lang) => lang !== locale);

	return (
		<StyledLangSwitcher>
			{languagesToRender.map((lang) => (
				<NavLink key={lang} >
					<Link href={pathname} as={asPath} locale={lang}>
						<a>{lang}</a>
					</Link>
				</NavLink>
			))}
		</StyledLangSwitcher>
	);
};

export default LangSwitcher;
