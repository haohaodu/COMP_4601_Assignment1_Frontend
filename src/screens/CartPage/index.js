/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import store from "store";
import { useHistory } from "react-router-dom";

import { DetailsMain } from "../ProductPage/ProductDetail/styles";
import { HeaderTwo } from "constants/fonts";
import { HeaderRow, CartContainer, ButtonWrapper } from "./styles";
import Table from "components/Table";
import SnackBar from "components/SnackBar";

const CartPage = () => {
  const [cart, setCart] = useState(store.get("cart"));
  const [submitted, setSubmitted] = useState(null);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const history = useHistory();
  const transition = undefined;

  const handleOrder = async () => {
    if (cart.length === 0) {
      setSeverity("error");
      setOpen(true);
      return;
    }
    await axios
      .post("/orders", {
        name: "HaoHao",
        products: cart,
      })
      .then((data) => {
        console.log("success! ", data);
        store.set("cart", []);
        setSubmitted(true);
        setCart([]);
        setSeverity("success");
        setOpen(true);
        setTimeout(() => {
          history.push("/products");
        }, 2000);
      })
      .catch((e) => {
        console.log("error params: ", e);
        setSeverity("error");
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  let bottomButton = null;

  if (cart.length !== 0) {
    if (submitted === true) {
      bottomButton = <h4>Thank you for buying with Metoo!</h4>;
    } else {
      bottomButton = <Button onClick={handleOrder}>Checkout</Button>;
    }
  }
  return (
    <DetailsMain>
      <SnackBar
        success="Order successfully placed"
        error="Product out of stock."
        severity={severity}
        handleClose={handleClose}
        open={open}
        transition={transition}
      />
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderTwo>Cart</HeaderTwo>
        </HeaderRow>
        {/* Table Top Row */}
        <Table cart={cart} setCart={setCart} type={"product"} />

        <ButtonWrapper>{bottomButton}</ButtonWrapper>
      </CartContainer>
    </DetailsMain>
  );
};

export default CartPage;
