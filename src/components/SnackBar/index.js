/** @format */

import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackBar = ({
  transition,
  open,
  success,
  error,
  severity,
  handleClose,
}) => {
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        TransitionComponent={transition}
      >
        <MuiAlert
          elevation={6}
          variant={"filled"}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {severity === "success" ? success : error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
