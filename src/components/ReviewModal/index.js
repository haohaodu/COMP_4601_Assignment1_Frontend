/** @format */

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import styled from "styled-components";

import { HeaderFive, BodyTwo } from "constants/fonts";

import { Row, RatingRow, RatingContainer, ModalStyle } from "./styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#30009C",
  },
  "& .MuiRating-iconHover": {
    color: "#7F39FB",
  },
  "& .MuiRating-icon": {
    color: "#121212",
  },
});

const ReviewModal = ({
  name,
  handleClose,
  open,
  rating,
  setRating,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    const newRating = e.target.value;
    setRating(newRating);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalStyle>
            <HeaderFive style={{ color: `black` }}>{name} Review</HeaderFive>
            <RatingContainer>
              <StyledRating
                color={"black"}
                value={rating}
                onChange={(e) => handleChange(e)}
                defaultValue={0}
                precision={0.5}
              />
              <RatingRow>
                <BodyTwo>Poor</BodyTwo>
                <BodyTwo>Good</BodyTwo>
              </RatingRow>
            </RatingContainer>

            <BodyTwo style={{ margin: "1em 0" }}>Rating: {rating}</BodyTwo>
            <Row>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                OK
              </Button>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
            </Row>
          </ModalStyle>
        </Fade>
      </Modal>
    </div>
  );
};

export default ReviewModal;
