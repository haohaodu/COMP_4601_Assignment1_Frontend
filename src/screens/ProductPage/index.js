/** @format */

import React, { useState, useEffect } from "react";
import store from "store";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";

import { ProductMain, QueryTypes, SearchContainer } from "./styles";
import SearchBar from "components/SearchBar";
import Dropdown from "components/Dropdown";
import ProductCard from "components/ProductCard";

const ProductPage = () => {
  const [queryText, setQueryText] = useState(store.get("query"));
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState("10");
  const [type, setType] = useState(`true`);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`/fruit?q=${queryText}`)
      .then(({ data: { data } }) => setProducts(data))
      .catch((e) =>
        console.log("error querying: ", `/fruit?q=${queryText}`, e)
      );
  }, []);

  const handleChangeBoost = (e) => {
    setType(e.target.value);
  };

  const handleChangeLimit = (e) => {
    const re = /^[0-9\b]+$/;
    if (e === `` || re.test(e)) {
      setLimit(e);
    } else setLimit("0");
  };
  const handleClick = (newUrl, productId) => {
    const newProduct = products.find(({ _id }) => productId === _id);
    store.set("currProduct", newProduct);
    history.push(newUrl);
  };

  const handleSearch = () => {
    const nameStr = queryText.length !== 0 ? `search=` + queryText + `&` : ``;
    const typeStr = type ? `boost=true&` : `boost=false&`;
    const limitNum = `limit=${limit}`;
    const queryUrl = `products?` + nameStr + typeStr + limitNum;
    console.log("query url: ", queryUrl);
    axios
      .get(queryUrl)
      .then(({ data: { data } }) => setProducts(data))
      .catch((e) => {
        console.log("error: ", e);
        setProducts([]);
      });
  };

  return (
    <ProductMain>
      <SearchContainer>
        <SearchBar
          queryText={queryText}
          setQueryText={setQueryText}
          handleClick={handleSearch}
        />
        <QueryTypes>
          <Dropdown value={type} handleChange={handleChangeBoost} />
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={limit}
            onChange={(e) => handleChangeLimit(e.target.value)}
            color="secondary"
          />
        </QueryTypes>
        {products &&
          products.length !== 0 &&
          products.map(({ title, ref, url, score }) => (
            <ProductCard
              key={ref}
              name={title}
              id={ref}
              width={0}
              length={0}
              height={0}
              stock={score}
              handleClick={handleClick}
            />
          ))}
      </SearchContainer>
    </ProductMain>
  );
};

export default ProductPage;
