/** @format */

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({ value, handleChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Boost</InputLabel>
      <Select value={value} label="Age" onChange={handleChange}>
        <MenuItem value={`true`}>true</MenuItem>
        <MenuItem value={`false`}>false</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
