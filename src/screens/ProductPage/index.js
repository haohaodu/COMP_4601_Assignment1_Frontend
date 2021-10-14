/** @format */

import React, { useState, useEffect } from "react";
import store from "store";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { ProductMain, QueryTypes, SearchContainer } from "./styles";
import SearchBar from "components/SearchBar";
import Dropdown from "components/Dropdown";
import ProductCard from "components/ProductCard";

const ProductPage = () => {
  const [queryText, setQueryText] = useState(store.get("query"));
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("all");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`/products?name=${queryText}`)
      .then(({ data: { data } }) => setProducts(data));
  }, []);

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleClick = (newUrl, productId) => {
    const newProduct = products.find(({ _id }) => productId === _id);
    store.set("currProduct", newProduct);
    history.push(newUrl);
  };

  const handleSearch = () => {
    const nameStr = queryText.length !== 0 ? `name=` + queryText + `&` : ``;
    const typeStr = type === `instock` ? `instock=true` : ``;
    const queryUrl = `products?` + nameStr + typeStr;
    console.log("query url: ", queryUrl);
    axios
      .get(queryUrl)
      .then(({ data: { data } }) => setProducts(data))
      .catch((e) => {
        console.log("error: ", e);
        setProducts([]);
      });
  };

  console.log("products: ", products);

  return (
    <ProductMain>
      <SearchContainer>
        <SearchBar
          queryText={queryText}
          setQueryText={setQueryText}
          handleClick={handleSearch}
        />
        <QueryTypes>
          <Dropdown value={type} handleChange={handleChangeType} />
        </QueryTypes>
        {products &&
          products.length !== 0 &&
          products.map(({ name, _id, price, width, length, height, stock }) => (
            <ProductCard
              key={_id}
              name={name}
              id={_id}
              price={price}
              width={width}
              length={length}
              height={height}
              stock={stock}
              handleClick={handleClick}
            />
          ))}
      </SearchContainer>
    </ProductMain>
  );
};

export default ProductPage;
