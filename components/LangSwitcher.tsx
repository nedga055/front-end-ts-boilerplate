import React from "react";
import { useTranslation } from "../utils/i18n";
import styled from "styled-components";

import NavLinkStyle from "./styles/NavLinkStyle";

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
				<NavLinkStyle key={lang}>
					<a onClick={() => changeLanguage(lang)}>{lang}</a>
				</NavLinkStyle>
			))}
		</StyledLangSwitcher>
	);
};

export default LangSwitcher;
