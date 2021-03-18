import styled from "@emotion/styled";

const SpanWrapper = (props) => {
	return <span {...props}></span>;
};

const SROnly = styled(SpanWrapper)`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`;

export default SROnly;
