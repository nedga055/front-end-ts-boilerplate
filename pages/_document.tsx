import React, { ReactNode } from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { extractCritical } from "@emotion/server";

type Props = {
	styleTags: ReactNode;
};

export default class MyDocument extends Document<Props> {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = extractCritical(initialProps.html);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style
						data-emotion-css={styles.ids.join(" ")}
						dangerouslySetInnerHTML={{ __html: styles.css }}
					/>
				</>
			),
		};
	}

	render(): JSX.Element {
		return (
			<Html>
				<html>
					<Head>{this.props.styleTags}</Head>
					<body>
						<div id="def-top"></div>
						<Main />
						<div id="def-footer"></div>
						<NextScript />
						<script src="/static/def-init.js"></script>
						<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/js/jquery/2.2.4/jquery.min.js"></script>
						<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/js/wet-boew.min.js"></script>
						<span id="wb-rsz" className="wb-init">
							&nbsp;
						</span>
						<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/js/theme.min.js"></script>
						<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/cdtscustom.js"></script>
					</body>
				</html>
			</Html>
		);
	}
}
