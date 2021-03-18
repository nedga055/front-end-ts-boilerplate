import { DefaultTheme } from "@emotion/styled";

const Theme: DefaultTheme = {
	maxWidth: "1200px",
	colors: {
		white: "#FFF",
		black: "#333",
		theme: {
			primary: "#242551",
			secondary: "#D63531",
			tertiary: "#0AA1A6",
		},
		gray: {
			w100: "#f7fafc",
			w200: "#edf2f7",
			w300: "#e2e8f0",
			w400: "#cbd5e0",
			w500: "#a0aec0",
			w600: "#718096",
			w700: "#4a5568",
			w800: "#2d3748",
			w900: "#1a202c",
		},
	},
	widths: {
		max: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1280px",
		},
	},
	padding: {
		sm: "0.5rem",
		md: "1rem",
		lg: "1.5rem",
	},
	margin: {
		sm: "0.5rem",
		md: "1rem",
		lg: "1.5rem",
	},
};

export { Theme };
