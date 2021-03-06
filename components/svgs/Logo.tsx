import * as React from "react";

type Props = {
	width: number;
	height: number;
	stroke?: string;
	fill?: string;
};

const Logo = ({ width, height, stroke = "#D63531", fill = "none" }: Props) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 26 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.9047 26H14.0833V20.9486L19.8365 21.4822L18.7172 19.4664L25 14.9486L23.3029 14.0474L24.9037 9.73123L21.5577 10.5494L20.2818 8.81818L15.8887 13.087L18.2357 4.88142L15.4674 6.43478L12.9759 2L10.4845 6.42292L7.76429 4.88142L10.0512 13.0751L5.70612 8.81818L4.44233 10.5494L1.03611 9.73123L2.64895 14.0474L1 14.9605L7.2347 19.4664L6.16349 21.4822L11.9047 20.9605V26Z"
			stroke={stroke}
			fill={fill}
		/>
	</svg>
);

export default Logo;
