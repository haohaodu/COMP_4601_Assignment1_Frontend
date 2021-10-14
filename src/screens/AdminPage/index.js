/** @format */

import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Slide from "@mui/material/Slide";

import SnackBar from "components/SnackBar";
import { HeaderThree } from "constants/fonts";
import {
  DetailsMain,
  DetailsContainer,
  Row,
} from "../ProductPage/ProductDetail/styles";
import { Section, RightColumn } from "./styles";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const AdminPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [transition, setTransition] = useState(undefined);

  const history = useHistory();

  const handleOpen = (newSeverity) => {
    setTransition(() => TransitionDown);
    setSeverity(newSeverity);
    setOpen(true);
  };

  const handleSubmit = async () => {
    await axios
      .post("/products", {
        name: name,
        price: price,
        length: length,
        width: width,
        height: height,
        stock: stock,
      })
      .then((e) => {
        console.log(e);
        handleOpen("success");
      })
      .catch((e) => {
        console.log("error: ", e.response.data);
        handleOpen("error");
      });
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/products");
  };

  return (
    <DetailsMain>
      <SnackBar
        success="Product successfully created 🥳"
        error="Mandatory fields not filled out."
        severity={severity}
        handleClose={handleClose}
        open={open}
        transition={transition}
      />

      <DetailsContainer>
        <RightColumn style={{ paddingTop: ".5em" }}>
          <Section>
            <Row>
              <ArrowBackIcon
                onClick={() => history.push("/")}
                fontSize={"large"}
              />
              <HeaderThree>Admin - Create Product</HeaderThree>
            </Row>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              color="secondary"
            />
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              color="secondary"
            />
            <Row>
              <TextField
                label="Length"
                variant="outlined"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                color="secondary"
              />
              <TextField
                label="Width"
                variant="outlined"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                color="secondary"
              />
              <TextField
                label="Height"
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                color="secondary"
              />
            </Row>
            <TextField
              fullWidth
              label="Stock"
              variant="outlined"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              color="secondary"
            />
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Section>
        </RightColumn>
      </DetailsContainer>
    </DetailsMain>
  );
};

export default AdminPage;
