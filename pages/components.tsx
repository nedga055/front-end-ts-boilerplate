import React from "react";
import Head from "next/head";
import styled from "styled-components";
import {
	useTranslation,
	I18nPage,
	includeDefaultNamespaces,
} from "../utils/i18n";

import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../components/styles/Buttons";
import Row from "../components/styles/Row";
import Column from "../components/styles/Column";

// Extended styling of Row and Column are meant only to
const StyledRow = styled(Row)`
	margin-left: 0;
	margin-right: 0;
`;

const StyledColumn = styled(Column)`
	background: ${({ theme }) => theme.colors.gray.w200};
	border: 1px solid ${({ theme }) => theme.colors.gray.w500};
	border-radius: 2px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const FixedColumn = styled(StyledColumn)`
	width: 100px;
`;

const ComponentsPage: I18nPage = () => {
	const { t } = useTranslation();
	return (
		<div>
			<Head>
				<title>
					{t("components")} - {t("common:site-title")}
				</title>
			</Head>
			<h1>{t("components")}</h1>
			<div>
				<h2>Grid</h2>
				<h3>Equal width columns</h3>
				<StyledRow>
					<StyledColumn>1 of 3</StyledColumn>
					<StyledColumn>2 of 3</StyledColumn>
					<StyledColumn>3 of 3</StyledColumn>
				</StyledRow>
				<h3>One column fixed width</h3>
				<StyledRow>
					<FixedColumn grow={false}>1 of 3 (100px)</FixedColumn>
					<StyledColumn>2 of 3</StyledColumn>
					<StyledColumn>3 of 3</StyledColumn>
				</StyledRow>
				<h3>Setting one column width</h3>
				<StyledRow>
					<StyledColumn>1 of 3</StyledColumn>
					<StyledColumn columns={6}>2 of 3 (wider)</StyledColumn>
					<StyledColumn>3 of 3</StyledColumn>
				</StyledRow>
				<StyledRow>
					<StyledColumn>1 of 3</StyledColumn>
					<StyledColumn columns={5}>2 of 3 (wider)</StyledColumn>
					<StyledColumn>3 of 3</StyledColumn>
				</StyledRow>
			</div>
			<div>
				<h2>Buttons</h2>
				<Row>
					<Column>
						<PrimaryButton>Primary</PrimaryButton>
					</Column>
					<Column>
						<SecondaryButton>Secondary</SecondaryButton>
					</Column>
					<Column>
						<TertiaryButton>Tertiary</TertiaryButton>
					</Column>
				</Row>
				<Row>
					<Column>
						<PrimaryButton as="a">Primary as Link</PrimaryButton>
					</Column>
					<Column>
						<SecondaryButton as="a">Secondary as Link</SecondaryButton>
					</Column>
					<Column>
						<TertiaryButton as="a">Tertiary as Link</TertiaryButton>
					</Column>
				</Row>
			</div>
		</div>
	);
};

ComponentsPage.getInitialProps = () => {
	return {
		namespacesRequired: includeDefaultNamespaces(["common"]),
	};
};

export default ComponentsPage;
