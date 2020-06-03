import React from "react";
import {
  borders,
  bottom,
  color,
  flexbox,
  position,
  space,
  layout,
} from 'styled-system';
import styled from 'styled-components';

export const Block = styled.div`
    ${flexbox}
    ${layout}
    ${color}
    ${space}
    ${position}
    ${bottom}
    ${borders}
  `;
export const BlockTheme = styled(Block)`
  background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #e2e2e2 100%);
`;

export const GridForCards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 20px;
  align-content: flex-start;
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
`;
