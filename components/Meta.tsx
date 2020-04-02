import React from "react";
import Head from "next/head";
import { useTranslation } from "../utils/i18n";

const Meta = () => {
	const { t } = useTranslation();
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link rel="shortcut icon" href="/public/static/favicon.png" />
			<title>{t("common:site-title")}</title>
		</Head>
	);
};

export default Meta;
