/** @format */

import React from "react";
import store from "store";

import { TableSectionWrapper } from "./styles";
import TableHeader from "./TableHeader";
import TableSection from "./TableSection";

const Table = ({ cart, setCart, type }) => {
  const addOneStock = (index) => {
    let cartCopy = [...cart];
    cartCopy[index].quantity += 1;
    store.set("cart", cartCopy);
    setCart(cartCopy);
  };

  const minusOneStock = (index) => {
    let cartCopy = [...cart];
    cartCopy[index].quantity -= 1;
    store.set("cart", cartCopy);
    setCart(cartCopy);
  };

  let tableSection = null;

  if (type === "product" || type === "curr_order") {
    tableSection = cart.map((product, index) => {
      const { name, _id, quantity, price } = product;
      if (quantity < 1) return true;
      return (
        <TableSection
          key={index}
          name={name}
          type={type}
          id={_id}
          quantity={quantity}
          price={price}
          addOneStock={() => addOneStock(index)}
          minusOneStock={() => minusOneStock(index)}
          cart={cart}
          index={index}
        />
      );
    });
  } else if (type === "order")
    tableSection = cart.map((order, index) => {
      const { name, _id } = order;
      return (
        <TableSection
          key={index}
          name={name}
          type={type}
          id={_id}
          cart={cart}
          index={index}
        />
      );
    });

  return (
    <div>
      {type === "product" && (
        <TableHeader
          titleOne="Description"
          titleTwo="Quantity"
          titleThree="Remove"
          titleFour="Price"
        />
      )}
      <TableSectionWrapper>{tableSection}</TableSectionWrapper>
    </div>
  );
};

export default Table;
