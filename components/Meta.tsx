import React from "react";
import Head from "next/head";
import { useTranslation } from "../utils/i18n";
import {useRouter} from 'next/router'

const Meta = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link rel="shortcut icon" href="/static/favicon.png" />
			<title>{t("common:site-title")}</title>

			<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js"></script>
			<script src={"https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-"+router.locale+".js"}></script>
			<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/css/theme.min.css"/>
			<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/cdtsfixes.css"/>
			<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/cdtsapps.css"/>

		</Head>
	);
};

export default Meta;
