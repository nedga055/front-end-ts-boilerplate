import App from "next/app";
import { AppProps } from "next/app";

import Page from "../components/Page";
import * as React from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}

export default MyApp;
