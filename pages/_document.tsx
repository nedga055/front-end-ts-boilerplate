import React, { ReactNode } from "react";
import Document, {
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

type Props = {
	styleTags: ReactNode;
};

export default class MyDocument extends Document<Props> {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal(undefined);
		}
	}

	render(): JSX.Element {
		return (
			<html>
				<Head>{this.props.styleTags}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
