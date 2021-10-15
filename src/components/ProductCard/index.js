/** @format */

import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const StyledLink = styled.a`
  margin-left: 1em;
  color: rgba(255, 255, 255, 0.7);
`;

const ProductCard = ({ name, id, stock, url, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          URL:
          <StyledLink href={id} target={"_blank"} rel="noreferrer">
            {id}
          </StyledLink>
          <br />
          Score: {stock} <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => handleClick(`/products/${id}`, id)}>View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
