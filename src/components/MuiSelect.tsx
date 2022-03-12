import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [multiData, setMultiData] = useState<string[]>([]);
  console.log({ country });
  const CountryDataHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  console.log({ multiData });
  const MultiDataHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMultiData(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Countary"
        value={country}
        onChange={CountryDataHandle}
        select
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
      <TextField
        label="Select Countary"
        value={multiData}
        onChange={MultiDataHandle}
        select
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please Select your Country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
