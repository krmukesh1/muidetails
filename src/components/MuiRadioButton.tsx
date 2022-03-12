import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experiance-froup-label">
          Years of Experiance
        </FormLabel>
        <RadioGroup
          name="job-experiance-group"
          aria-labelledby="job-experiance-froup-label"
          value={value}
          onChange={handleChnage}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
