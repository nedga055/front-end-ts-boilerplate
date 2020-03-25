import App from "next/app";
import { AppProps } from 'next/app'

import Page from "../components/Page";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}

export default MyApp;