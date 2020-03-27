import * as React from "react";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../utils/i18n";

const Home: I18nPage = () => {
	const { t, i18n } = useTranslation();
	const dev = `This is my word. Language ${i18n.language}`;

	return (
		<h1>
			{t("index:hello-world")} {dev}
		</h1>
	);
};

Home.getInitialProps = () => {
	return {
		namespacesRequired: includeDefaultNamespaces(["index"]),
	};
};

export default Home;
