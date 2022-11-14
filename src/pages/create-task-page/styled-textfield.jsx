import React from 'react';
import { TextField } from '@mui/material';

const StyledTextField = ({ name, rows, handleChange }) => (
  <TextField
    style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0px 4px rgba(0, 0, 0, 0.25)',
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& > fieldset': {
          border: 'none',
        },
      },
    }}
    id="outlined-multiline-static"
    name={name}
    onChange={handleChange}
    multiline
    rows={rows}
    fullWidth
  />
);

export default StyledTextField;
