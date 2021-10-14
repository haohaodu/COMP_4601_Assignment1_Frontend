/** @format */

import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  gap: 1em;
  width: 100%;
`;

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  boxshadow: 24;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
