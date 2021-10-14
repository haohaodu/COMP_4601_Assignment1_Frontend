/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import store from "store";

import { DetailsMain } from "../../ProductPage/ProductDetail/styles";
import { HeaderFive } from "constants/fonts";
import { HeaderRow, CartContainer } from "./styles";

const OrderDetails = () => {
  const [products, setProducts] = useState([]);
  const [quantityList, setQuantityList] = useState([]);
  const cart = store.get("curr_order");

  useEffect(() => {
    const getProducts = async () => {
      let promises = [];

      // get all product values
      cart.products.map(({ _id, quantity }) => {
        promises.push(axios.get(`/products/${_id}`));
        setQuantityList([...quantityList, quantity]);
        return true;
      });
      await Promise.all(promises).then((data) => {
        setProducts(data);
      });

      // get all quantity values
      let quantityCopy = [...quantityList];
      cart.products.map(({ quantity }) => quantityCopy.push(quantity));

      setQuantityList(quantityCopy);
    };
    getProducts();
  }, []);

  return (
    <DetailsMain>
      <CartContainer>
        {/* Table Title */}
        <HeaderRow>
          <HeaderFive>Order Code: {cart._id} </HeaderFive>
        </HeaderRow>
        {products.map((data, index) => {
          const {
            data: {
              data: { _id, price, name },
            },
          } = data;
          return (
            <div key={_id} style={{ margin: ".75em" }}>
              <div>Product Name: {name}</div>
              <div>Quantity: {quantityList[index]}</div>
              <div>Price: {price}</div>
              <div>Product ID: {_id}</div>
            </div>
          );
        })}
      </CartContainer>
    </DetailsMain>
  );
};

export default OrderDetails;
