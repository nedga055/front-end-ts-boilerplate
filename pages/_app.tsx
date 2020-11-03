import App from "next/app";
import { AppProps } from "next/app";

import Page from "../components/Page";
import i18n from "../i18n.js";
import * as React from "react";
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	// Apply language based on NextJS internationalized route
	i18n.changeLanguage(router.locale);

  return (
		<Page>
			<Component {...pageProps} />
		</Page>
	)
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default MyApp;
