/** @format */

import styled from "styled-components";

export const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3em;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableHeaderDiv = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

export const TableWhiteDiv = styled.div`
  width: 100%;
  height: 0.25em;
  background-color: ${({ color }) => color};
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5em;
`;

export const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7.5em;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 10em;
`;

export const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 4em;
  width: 15em;
`;

export const DescriptionCol = styled.div`
  width: 15em;
`;

export const ProductRowDiv = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  padding: 0 2em;
`;

export const QuantityContainer = styled.div`
  padding: 0 0 0 0em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2em;
`;
