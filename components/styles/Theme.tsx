import { DefaultTheme } from "styled-components";

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
			w100: "#F4F4F6",
			w200: "#999BA4",
			w300: "#4D4654",
			w400: "#37323C",
			w500: "#030308",
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
