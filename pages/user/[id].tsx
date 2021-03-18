import React from "react";
import Head from "next/head";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../../utils/i18n";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getServerSideProps = async ({ query, locale }) => ({
	props: {
		name: query.id,
		...(await serverSideTranslations(
			locale,
			includeDefaultNamespaces(["user"]),
		)),
	},
});

export default UserPage;
