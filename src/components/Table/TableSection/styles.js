/** @format */

import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7.5em;
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

export const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 4em;
  width: 15em;
`;

export const ProductRowDiv = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityContainer = styled.div`
  padding: 0 0 0 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 8%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2em;
`;
