"use client";
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import { brown } from "@mui/material/colors";
import { Typography as T, Button, InputBase } from "@mui/material";
import getClassPrefixer from "@/app/utils/getClassPrefixer";
import { Search } from '@mui/icons-material';

const displayName = "Navbar";
const cls = getClassPrefixer(displayName);

const Container = styled('div')({
  backgroundColor: brown[700],
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [`& .${cls.titleContainer}`]: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    color: brown[50],
  },
  [`& .${cls.searchContainer}`]: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: brown[600],
    borderRadius: '4px',
    padding: '0.25rem 0.5rem',
    minWidth: '300px',
    '&:hover': {
      backgroundColor: brown[500],
    },
  },
  [`& .${cls.searchInput}`]: {
    color: brown[50],
    flex: 1,
    marginLeft: '0.5rem',
    '& input': {
      padding: '0.5rem 0',
      '&::placeholder': {
        color: brown[200],
        opacity: 1,
      },
    },
  },
  [`& .${cls.searchIcon}`]: {
    color: brown[200],
  },
  [`& .${cls.btnContainer}`]: {
    padding: '2rem',
  },
  [`& .${cls.button}`]: {
    color: brown[50],
  },
});

export default function Header() {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      console.log('Search:', event.target.value);
    }
  };

  return (
    <Container position="static">
      <div className={cls.titleContainer}>
        <T variant="h4">Simple Website</T>
      </div>


      <div className={cls.btnContainer}>
        <Button href="/login" className={cls.button}>Login</Button>
      </div>
    </Container>
  );
}