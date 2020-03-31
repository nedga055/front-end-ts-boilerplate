import styled from "styled-components";

const Row = styled.div`
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
