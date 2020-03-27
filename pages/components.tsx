import React from "react";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../utils/i18n";

const ComponentsPage: I18nPage = () => {
	const { t } = useTranslation();
	return <h1>{t("components")}</h1>;
};

ComponentsPage.getInitialProps = () => {
	return {
		namespacesRequired: includeDefaultNamespaces(["common"]),
	};
};

export default ComponentsPage;
