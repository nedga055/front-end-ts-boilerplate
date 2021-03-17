import "@emotion/styled";

declare module "@emotion/styled" {
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
				w600: string;
				w700: string;
				w800: string;
				w900: string;
			};
		};
		widths: {
			max: {
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
