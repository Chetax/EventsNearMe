import React from 'react';
import { styled } from '@mui/system';

import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledInput = styled(TextField)(
  ({ theme }) => ({
    position: 'relative',
    '& .MuiInputBase-input': {
      padding: '8px 25px 8px 8px', // Adjust padding
      height: '22px', // Adjust height
      width: "28vw", // Default width
    },
    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: 0,
      top: '50%', // Center vertically
      transform: 'translateY(-50%)', // Center vertically
    },
    [theme.breakpoints.down('lg')]: {
      '& .MuiInputBase-input': {
        width: "23vw", // Adjust width for medium screens
      },
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiInputBase-input': {
        width: "20vw", // Adjust width for small screens
      },
    },
  })
);

const SearchBar = () => {
  return (
    <StyledInput
      placeholder="Search..."
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ fontSize: 28,cursor:"pointer" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
