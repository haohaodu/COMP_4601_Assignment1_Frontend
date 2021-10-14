/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import store from "store";

import { DetailsMain } from "../ProductPage/ProductDetail/styles";
import { HeaderTwo } from "constants/fonts";
import { HeaderRow, CartContainer } from "./styles";
import Table from "components/Table";

const OrderPage = () => {
  const [cart, setCart] = useState(store.get("cart"));

  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get("/orders")
        .then(({ data: { data } }) => setCart(data))
        .catch((e) => console.log("error params: ", e));
    };
    getOrders();
  }, []);

  return (
    <DetailsMain>
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderTwo>Orders</HeaderTwo>
        </HeaderRow>
        {/* Table Top Row */}
        <Table cart={cart} setCart={setCart} type={"order"} />
      </CartContainer>
    </DetailsMain>
  );
};

export default OrderPage;
