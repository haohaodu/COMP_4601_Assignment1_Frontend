/** @format */

import { secondary50 } from "constants/colors";
import styled from "styled-components";

export const DetailsMain = styled.div`
  width: 100%;
  position: fixed;
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 10em;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 2%;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4em;
  align-items: flex-start;
  margin-left: 2em;
  height: 40em;
  overflow-y: overlay;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
`;

export const Column = styled.div``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const BorderedSection = styled.div`
  border: 2px solid #121212;
  display: flex;
  flex-direction: column;
  gap: 0em;
  overflow-y: scroll;
`;

export const RatingsText = styled.div`
  font-weight: 500;
  font-size: 1em;
  color: ${secondary50};
  cursor: pointer;
`;
