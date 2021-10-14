/** @format */

import React, { useEffect, useState } from "react";
import store from "store";
import Rating from "@mui/material/Rating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";

import SnackBar from "components/SnackBar";
import ReviewModal from "components/ReviewModal";
import Slide from "@mui/material/Slide";
import { HeaderFive, HeaderThree } from "constants/fonts";
import {
  DetailsMain,
  DetailsContainer,
  Section,
  Row,
  RightColumn,
  BorderedSection,
  RatingsText,
} from "./styles";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const ProductDetail = () => {
  const [rating, setRating] = useState(2.5);
  const [productSnackBar, setProductSnackBar] = useState(false);
  const [reviewSnackBar, setReviewSnackBar] = useState(false);
  const [reviews, setReviews] = useState([]);

  const [reviewRating, setReviewRating] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const product = store.get("currProduct");

  let { name, _id, price, width, length, height, stock } = product;
  const history = useHistory();

  const getReviews = async (id) => {
    let tempRating = 0;
    return await axios
      .get(`/reviews/products/${id}`)
      .then(({ data: { data } }) => {
        console.log("data: ", data);
        if (data.length !== 0) {
          data.map(({ rating }) => (tempRating += rating));
          setRating(tempRating / data.length);
          setReviews(data);
        }
      })
      .catch((e) => console.log("error when retrieving /review/products", e));
  };

  const openReviews = () => {
    console.log("reviews: ", reviews);
    setOpenModal(true);
  };

  useEffect(() => {
    getReviews(product._id);
  }, [openModal, product._id]);

  const handleClose = () => {
    setOpenModal(false);
    setTransition(() => TransitionDown);
    setReviewSnackBar(true);
  };

  const addToCart = () => {
    let cart = store.get("cart");
    const productIndex = cart.findIndex((product) => product._id === _id);

    // add new product to cart or add quantity
    if (productIndex === -1) cart.push({ ...product, quantity: 1 });
    else cart[productIndex].quantity++;

    // update global cart
    store.set("cart", cart);
    setProductSnackBar(true);
  };

  const submitReview = async () => {
    await axios
      .post("/reviews", {
        product_id: product._id,
        rating: reviewRating,
      })
      .then(({ data: { message } }) => console.log("Success! ", message))
      .catch((e) => console.log("error params: ", e.message.params));
    handleClose();
  };

  return (
    <DetailsMain>
      <DetailsContainer>
        <RightColumn>
          <Section>
            <Row>
              <ArrowBackIcon
                onClick={() => history.goBack()}
                fontSize={"large"}
                style={{ cursor: `pointer` }}
              />
              <HeaderThree>{name}</HeaderThree>
            </Row>
            <Row>
              <Rating
                defaultValue={rating}
                precision={0.1}
                name="read-only"
                readOnly
              />
              <RatingsText onClick={openReviews}>
                ({reviews.length} ratings)
              </RatingsText>
            </Row>
            <HeaderFive>Product ID #: {_id}</HeaderFive>
          </Section>

          <Section>
            <HeaderThree>Details</HeaderThree>
            <div>
              <HeaderFive>Price: ${price}</HeaderFive>
              <HeaderFive>Only {stock} left in stock.</HeaderFive>
              <HeaderFive>
                Dimensions (length x width x height): {length} cm x {width} cm x{" "}
                {height} cm
              </HeaderFive>
            </div>
          </Section>

          <Row>
            <Button variant="contained" onClick={() => addToCart()}>
              Add to Cart
            </Button>
          </Row>

          <BorderedSection>
            {reviews.length !== 0 &&
              reviews.map(({ _id, rating }) => (
                <HeaderFive key={_id}>
                  Annon rated Product Name {rating / 2} out of 5 stars
                </HeaderFive>
              ))}
          </BorderedSection>
        </RightColumn>
      </DetailsContainer>
      {openModal && (
        <ReviewModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          name={name}
          rating={reviewRating}
          setRating={setReviewRating}
          handleSubmit={() => submitReview()}
        />
      )}

      <SnackBar
        success="Review successfully posted 🥳"
        error="Mandatory information not filled out."
        severity={"success"}
        handleClose={() => setReviewSnackBar(false)}
        open={reviewSnackBar}
        transition={transition}
      />
      <SnackBar
        success="Product successfully added to cart 🥳"
        error="Unable to add product to cart."
        severity={"success"}
        handleClose={() => setProductSnackBar(false)}
        open={productSnackBar}
        transition={transition}
      />
    </DetailsMain>
  );
};

export default ProductDetail;
