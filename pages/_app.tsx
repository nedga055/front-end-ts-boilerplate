import App from "next/app";
import { AppProps } from "next/app";

import Page from "../components/Page";
import * as React from "react";
import { useRouter } from "next/router";

// import i18n from "../i18n";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(MyApp);
