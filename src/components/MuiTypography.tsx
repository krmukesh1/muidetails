import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> h1 Heading</Typography>
      <Typography variant="h2"> h2 Heading</Typography>
      <Typography variant="h3"> h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom> h4 Heading</Typography>
      <Typography variant='h5'> h5 Heading</Typography>
      <Typography variant='h6'> h6 Heading</Typography>
      {/* Subtitle */}
      <Typography variant='subtitle1'> subtitle 1</Typography>
      <Typography variant='subtitle2'> subtitle 2</Typography>
      {/* for Paragraph */}
      <Typography >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vero, architecto totam ab aut voluptas commodi veniam quam id ut, a officia eveniet laborum tenetur optio aperiam perspiciatis repellendus voluptatum?</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate possimus libero ex necessitatibus iste! Inventore corporis optio, adipisci ut alias saepe debitis ipsum dolores accusamus, dicta, aliquid maiores. Sunt, numquam!</Typography>
    </div>
  );
};
