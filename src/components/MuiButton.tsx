import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormateItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
export const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updateFormats: string | null
  ) => {
    setFormats(updateFormats);
  };
  console.log(formats);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          href="https://mui.com/components/stack/#main-content"
        >
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Primary
        </Button>
        <Button variant="text" color="error">
          Primary
        </Button>
        <Button variant="text" color="warning">
          Primary
        </Button>
        <Button variant="outlined" color="info">
          Primary
        </Button>

        <Button variant="outlined" color="success">
          Primary
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("clicked")}
        >
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormateItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
