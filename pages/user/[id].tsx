import React from "react";
import Head from "next/head";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../../utils/i18n";

type Props = I18nPage & {
	name: string;
};

const UserPage = ({ name }: Props) => {
	const { t } = useTranslation();
	return (
		<>
			<Head>
				<title>
					{t("common:profile")} - {t("common:site-title")}
				</title>
			</Head>
			<h1>
				{t("user:user")}: {name}
			</h1>
		</>
	);
};

UserPage.getInitialProps = function (context) {
	return {
		namespacesRequired: includeDefaultNamespaces(["user"]),
		name: context.query.id,
	};
};

export default UserPage;
