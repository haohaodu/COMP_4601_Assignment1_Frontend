/** @format */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import store from "store";
import FadeIn from "react-fade-in";

import { HeaderTwo } from "constants/fonts";
import { HeaderText, Logo, HeaderWrapper, LandingMain } from "./styles";
import LogoLarge from "assets/logo-large.png";
import SearchBar from "components/SearchBar";

const LandingPage = () => {
  const [queryText, setQueryText] = useState("");
  const history = useHistory();

  const handleClick = () => {
    store.set("query", queryText);
    history.push("/products");
  };

  return (
    <FadeIn delay={500}>
      <LandingMain>
        <HeaderWrapper id="example-fade-text">
          <HeaderText>
            <Logo src={LogoLarge} alt="logo" />
            <HeaderTwo>Metoo</HeaderTwo>
          </HeaderText>
          <SearchBar
            queryText={queryText}
            setQueryText={setQueryText}
            handleClick={handleClick}
          />
        </HeaderWrapper>
      </LandingMain>
    </FadeIn>
  );
};

export default LandingPage;
