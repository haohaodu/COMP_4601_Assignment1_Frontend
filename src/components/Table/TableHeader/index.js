/** @format */

import React from "react";
import {
  TableRow,
  TableHeaderDiv,
  TableWhiteDiv,
  HeaderSection,
  DescriptionCol,
} from "./styles";
import { SubtitleOne } from "constants/fonts";
import { white, black } from "constants/colors";

const TableHeader = ({ titleOne, titleTwo, titleThree, titleFour }) => {
  return (
    <HeaderSection>
      <TableWhiteDiv color={black} />
      <TableRow>
        <DescriptionCol>
          <SubtitleOne>{titleOne}</SubtitleOne>
        </DescriptionCol>
        <TableHeaderDiv>
          <SubtitleOne>{titleTwo}</SubtitleOne>
          {/* <SubtitleOne>{titleThree}</SubtitleOne> */}
        </TableHeaderDiv>
        <SubtitleOne>{titleFour}</SubtitleOne>
      </TableRow>
      <TableWhiteDiv color={white} />
    </HeaderSection>
  );
};

export default TableHeader;
