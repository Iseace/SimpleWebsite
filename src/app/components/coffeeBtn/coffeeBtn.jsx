"use client";
import React from 'react';
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { brown } from "@mui/material/colors";
import { LocalCafe } from '@mui/icons-material';

const StyledCoffeeButton = styled(Button)(({ theme }) => ({
  backgroundColor: brown[600],
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: 8,
  textTransform: 'none',
  fontWeight: 600,
  gap: '0.5rem',

  '&:hover': {
    backgroundColor: brown[700],
  },

  '&:active': {
    backgroundColor: brown[800],
  },
}));

const CoffeeBtn = ({ onClick, children = "Get Coffee", ...props }) => {
  const handleClick = () => {
    if (onClick) {
      alert("Coffee button clicked!");
    }
  };

  return (
    <StyledCoffeeButton
      onClick={handleClick}
      startIcon={<LocalCafe />}
      {...props}
    >
      {children}
    </StyledCoffeeButton>
  );
};

export default CoffeeBtn;