import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		maxWidth: string;
		colors: {
			white: string;
			black: string;
			theme: {
				primary: string;
				secondary: string;
				tertiary: string;
			};
			gray: {
				w100: string;
				w200: string;
				w300: string;
				w400: string;
				w500: string;
			};
		};
		widths: {
			max: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
			};
		};
		padding: {
			sm: string;
			md: string;
			lg: string;
		};
		margin: {
			sm: string;
			md: string;
			lg: string;
		};
	}
}
