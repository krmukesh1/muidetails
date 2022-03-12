import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value? "Required" : "Do not share Your Password with anyone"}
        />
        <TextField
          label="Form Input"
          helperText="Do not share Your Password with anyone"
        />
        <TextField
          label="password"
          type="password"
          helperText="Do not share Your Password with anyone"
          disabled
        />
        <TextField
          label="Read only"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"> $ </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end"> Kg </InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
