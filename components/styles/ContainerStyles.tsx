import styled from "styled-components";

const ContainerStyles = styled.div`
	width: 100%;
	margin: 0 auto;

	@media (min-width: ${({ theme }) => theme.widths.max.sm}) {
		max-width: ${({ theme }) => theme.widths.max.sm};
	}

	@media (min-width: ${({ theme }) => theme.widths.max.md}) {
		max-width: ${({ theme }) => theme.widths.max.md};
	}

	@media (min-width: ${({ theme }) => theme.widths.max.lg}) {
		max-width: ${({ theme }) => theme.widths.max.lg};
	}

	@media (min-width: ${({ theme }) => theme.widths.max.xl}) {
		max-width: ${({ theme }) => theme.widths.max.xl};
	}
`;

export default ContainerStyles;
