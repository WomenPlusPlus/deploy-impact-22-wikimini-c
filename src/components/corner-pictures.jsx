import React from 'react';
import { Box, CardMedia } from '@mui/material';

const CornerPictures = () => (
  <>
    <Box height="200px" width="134px" left={0} bottom={-18} position="absolute">
      <CardMedia
        component="img"
        image="Tree.png"
        alt="tree"
      />
    </Box>
    <Box height="180px" width="114px" left={35} bottom={-28} position="absolute">
      <CardMedia
        component="img"
        image="Tree.png"
        alt="tree"
      />
    </Box>
    <Box height="171px" width="145px" right={0} bottom={0} position="absolute">
      <CardMedia
        height="171px"
        component="img"
        image="woman-sitting.png"
        alt="woman sitting"
      />
    </Box>
    <Box height="65px" width="90px" right={70} bottom={10} position="absolute">
      <CardMedia
        height="65px"
        component="img"
        image="backpack.png"
        alt="backpack"
      />
    </Box>
  </>
);

export default CornerPictures;
