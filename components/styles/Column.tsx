import styled from "@emotion/styled";

interface ColumnProps {
	totalColumns?: number;
	grow?: boolean;
	columns?: number;
	staggerPoint?: string;
	theme?: any;
	children: any;
}

const ColumnWrapper = (props: ColumnProps) => {
	const { totalColumns, grow, columns, staggerPoint, theme, ...rest } = props;
	return <div {...rest}></div>;
};

const Column = styled(ColumnWrapper)`
	${(props) => {
		const totalColumns = props.totalColumns || 12;
		const grow = typeof props.grow !== "undefined" ? props.grow : true;
		const columns = props.columns || 12;
		const staggerPoint =
			props.theme.sizes[props.staggerPoint] || props.theme.widths.max.sm;
		return `
			position: relative;
			padding: 0 1.5rem;
			width: 100%;
			@media (min-width: ${staggerPoint}) {
				${
					columns &&
					`
					max-width: ${(columns / totalColumns) * 100}%;
					flex: 0 0 ${(columns / totalColumns) * 100}%;
				`
				}
				${
					!columns &&
					`
					flex-basis: 0;
					flex-grow: ${grow ? 1 : 0};
					max-width: 100%;
				`
				}
			}
		`;
	}}
`;

export default Column;
