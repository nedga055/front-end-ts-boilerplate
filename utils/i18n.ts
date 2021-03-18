import { useTranslation as originalUseTranslation } from "next-i18next";
import { NextComponentType, NextPageContext } from "next";

export const includeDefaultNamespaces = (namespaces: string[]) =>
	["common", "_error"].concat(namespaces);

export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
	NextPageContext,
	{ namespacesRequired: string[] },
	P & { namespacesRequired: string[] }
>;
