/** @format */

import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const ProductCard = ({
  name,
  id,
  price,
  width,
  length,
  height,
  stock,
  handleClick,
}) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader title={name} subheader={`Product Id: ${id}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Price: ${price} <br />
          Stock: {stock} <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => handleClick(`/products/${id}`, id)}>View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
