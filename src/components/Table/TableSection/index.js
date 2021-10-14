/** @format */

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import store from "store";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

import {
  TableRow,
  TableContainer,
  TableWhiteDiv,
  DescriptionColumn,
  ProductRowDiv,
  QuantityContainer,
  ProductContainer,
} from "./styles";
import { HeaderFive, SubtitleOne, BodyOne } from "constants/fonts";
import { white, black } from "constants/colors";

const TableSection = ({
  name,
  id,
  type,
  price,
  quantity,
  addOneStock,
  minusOneStock,
  index,
  cart,
}) => {
  const history = useHistory();

  const handleViewOrder = () => {
    history.push(`/order/${id}`);
    store.set("curr_order", cart[index]);
  };

  let lastColumn = null;
  if (type === "product" || type === "curr_order")
    lastColumn = <SubtitleOne>${price}.00</SubtitleOne>;
  else lastColumn = <Button onClick={handleViewOrder}>View Order</Button>;

  const addIcon = type !== "curr_order" && (
    <AddIcon onClick={addOneStock} style={{ cursor: "pointer" }} />
  );

  const removeIcon = type !== "curr_order" && (
    <RemoveIcon onClick={minusOneStock} style={{ cursor: "pointer" }} />
  );

  return (
    <div>
      <TableContainer>
        <TableWhiteDiv color={black} />
        <TableRow>
          <DescriptionColumn>
            <HeaderFive>{name}</HeaderFive>
            <BodyOne>
              {type} code: {id}
            </BodyOne>
          </DescriptionColumn>
          {type === "product" && (
            <ProductRowDiv>
              <QuantityContainer>
                {addIcon}
                {quantity}
                {removeIcon}
              </QuantityContainer>
            </ProductRowDiv>
          )}

          <ProductContainer>{lastColumn}</ProductContainer>
        </TableRow>
        <TableWhiteDiv color={white} />
      </TableContainer>
    </div>
  );
};

export default TableSection;
