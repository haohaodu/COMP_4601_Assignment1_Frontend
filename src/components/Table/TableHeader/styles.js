/** @format */

import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5em;
`;

export const TableWhiteDiv = styled.div`
  width: 100%;
  height: 0.25em;
  background-color: ${({ color }) => color};
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionCol = styled.div`
  width: 15em;
`;

export const TableHeaderDiv = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;
