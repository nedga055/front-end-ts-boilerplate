import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNav = styled.nav`
	background: ${({ theme }) =>
		"linear-gradient(-130deg, " +
		theme.colors.purpleDark +
		", " +
		theme.colors.purpleLight +
		")"};
`;

const StyledUl = styled.ul`
	list-style: none;
	display: grid;
	grid-row-gap: 1rem;
	grid-template-columns: 1fr;
	padding: 0;
	margin: 0;
`;

const StyledLI = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Navigation = () => {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLI>
					<Link href="/">
						<a>Home</a>
					</Link>
				</StyledLI>
			</StyledUl>
		</StyledNav>
	);
};

export default Navigation;
