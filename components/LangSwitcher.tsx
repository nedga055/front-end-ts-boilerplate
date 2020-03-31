import React from "react";
import { useTranslation } from "../utils/i18n";
import styled from "styled-components";

import NavLink from "./styles/NavLink";

const StyledLangSwitcher = styled.div`
	list-style: none;
	display: flex;
`;

const LangSwitcher = () => {
	const { i18n } = useTranslation();
	const { language, languages, changeLanguage } = i18n;

	const languagesToRender = languages.filter((lang) => lang !== language);

	return (
		<StyledLangSwitcher>
			{languagesToRender.map((lang) => (
				<NavLink key={lang}>
					<a onClick={() => changeLanguage(lang)}>{lang}</a>
				</NavLink>
			))}
		</StyledLangSwitcher>
	);
};

export default LangSwitcher;
