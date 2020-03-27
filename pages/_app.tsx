import App from "next/app";
import { AppProps } from "next/app";
import { appWithTranslation } from "../i18n";

import Page from "../components/Page";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default appWithTranslation(MyApp);
