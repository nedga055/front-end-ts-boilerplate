import styled from "@emotion/styled";

const RowWrapper = (props) => {
	return <div {...props}></div>;
};

const Row = styled(RowWrapper)`
	display: flex;
	flex-wrap: wrap;
	margin: 1.5rem -1.5rem;

	&:first-child,
	&:last-child {
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export default Row;
