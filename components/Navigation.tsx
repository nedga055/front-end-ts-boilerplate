import React from 'react';
import styled from "styled-components";
import Link from "next/link";

import { CreateTemplate, Help, ProcessForm } from '../components/Icons';

const StyledNav = styled.nav`
  background: ${({theme}) => 'linear-gradient(-130deg, ' + theme.colors.purpleDark + ', ' + theme.colors.purpleLight + ')'};
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
               <StyledLI><Link href={"/"}><a>MaRT</a></Link></StyledLI>
               <StyledLI><Link href={"/create-template"}><a><CreateTemplate /></a></Link></StyledLI>
               <StyledLI><Link href={"/process-form"}><a><ProcessForm /></a></Link></StyledLI>
               <StyledLI><Link href={"/help"}><a><Help /></a></Link></StyledLI>
           </StyledUl>
        </StyledNav>
    );
};

export default Navigation;