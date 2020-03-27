import React from "react";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../../utils/i18n";
import { NextComponentType, NextPageContext } from "next";

type Props = I18nPage & {
	name: string;
};

const UserPage = ({ name }: Props) => {
	const { t } = useTranslation();
	return (
		<h1>
			{t("user:user")}: {name}
		</h1>
	);
};

UserPage.getInitialProps = function (context) {
	return {
		namespacesRequired: includeDefaultNamespaces(["user"]),
		name: context.query.id,
	};
};

export default UserPage;
