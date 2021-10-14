/** @format */

import styled from "styled-components";

export const HeaderMain = styled.div`
  z-index: 30;
  width: 100%;
  position: fixed;
  top: 2em;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 3em;
`;

export const Logo = styled.img`
  width: 1.5em;
  height: 1.5em;
`;
