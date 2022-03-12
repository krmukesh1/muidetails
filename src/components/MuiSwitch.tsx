import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const dataHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={dataHandle} />}
      />
    </Box>
  );
};
