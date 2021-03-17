import App from "next/app";
import { AppProps } from "next/app";

import Page from "../components/Page";
import * as React from "react";
import { useRouter } from "next/router";

import i18n from "../i18n";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { I18nextProvider, useSSR } from "react-i18next";
import { useTranslation } from "../utils/i18n";
function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	// // Apply language based on NextJS internationalized route
	if (i18n.language != router.locale) {
		i18n.changeLanguage(router.locale);
	}

	return (
		<CacheProvider value={cache}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</CacheProvider>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default MyApp;
