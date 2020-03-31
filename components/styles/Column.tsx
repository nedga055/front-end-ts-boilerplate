import styled from "styled-components";

const Column = styled.div.attrs((props) => ({
	totalColumns: props.totalColumns || 12,
	grow: typeof props.grow !== "undefined" ? props.grow : true,
}))`
	position: relative;
	padding: 0 1.5rem;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.widths.max.sm}) {
		${(props) =>
			props.columns &&
			`
			max-width: ${(props.columns / props.totalColumns) * 100}%;
			flex: 0 0 ${(props.columns / props.totalColumns) * 100}%;
		`}

		${(props) =>
			!props.columns &&
			`
			flex-basis: 0;
			flex-grow: ${props.grow ? 1 : 0};
			max-width: 100%;
		`}
	}
`;

export default Column;
