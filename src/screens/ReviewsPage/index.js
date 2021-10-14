/** @format */

import React from "react";
import Rating from "@mui/material/Rating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { HeaderThree } from "constants/fonts";
import {
  DetailsMain,
  DetailsContainer,
  LeftColumn,
  RightColumn,
  Section,
  Row,
} from "../ProductPage/ProductDetail/styles";

const ProductDetail = () => {
  return (
    <DetailsMain>
      <DetailsContainer>
        <LeftColumn>
          <ArrowBackIcon fontSize={"large"} style={{ marginTop: 15 }} />
        </LeftColumn>
        <RightColumn>
          <Section>
            <HeaderThree>Product Name</HeaderThree>
            <Row>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
              (29)
            </Row>
          </Section>
        </RightColumn>
      </DetailsContainer>
    </DetailsMain>
  );
};

export default ProductDetail;
