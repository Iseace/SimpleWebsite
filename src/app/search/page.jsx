"use client";
import Link from 'next/link'
import { React, useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import { brown } from "@mui/material/colors";
import { Typography as T, InputBase } from "@mui/material";
import getClassPrefixer from "@/app/utils/getClassPrefixer";
import { Search } from '@mui/icons-material';

const displayName = "Navbar";
const cls = getClassPrefixer(displayName);

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),

  [`& .${cls.searchContainer}`]: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: brown[200],
    borderRadius: 8,
    padding: '0.25rem 0.5rem',
    minWidth: 250,
    marginTop: theme.spacing(2),

    '&:hover': {
      backgroundColor: brown[100],
    },
  },

  [`& .${cls.searchInput}`]: {
    color: brown[900],
    flex: 1,
    marginLeft: '0.5rem',

    '& input': {
      padding: '0.5rem 0',
      color: brown[900],

      '&::placeholder': {
        color: brown[400],
        opacity: 1,
      },
    },
  },

  [`& .${cls.grid}`]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '2rem',
    padding: '2rem',
    width: '100%'
  },

  [`& .${cls.imgContainer}`]: {
    backgroundColor: brown[50],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    border: `1px solid ${brown[300]}`,
    borderRadius: 8,
    textAlign: 'center',
    height: '100%',

    '&:hover': {
      backgroundColor: brown[100],
    },
  },

  [`& .${cls.img}`]: {
    width: '100%',
    height: 'auto',
    maxHeight: '10rem',
    borderRadius: 8,
    objectFit: 'cover',
  },
}));

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      const data = await response.json();
      setCoffeeData(data);
    };
    fetchCoffeeData();
  }, []);

  const filteredCoffee = coffeeData.filter(coffee =>
    coffee.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <T variant="h4" gutterBottom>Search Page</T>

      <T variant="subtitle1" sx={{ color: brown[600] }}>
        Welcome to the coffee search page
      </T>

      <div className={cls.searchContainer}>
        <Search />
        <InputBase
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={cls.searchInput}
          placeholder="Search..."
        />
      </div>

      <div className={cls.grid}>
        {filteredCoffee.map(coffee => (
          <div className={cls.imgContainer} key={coffee.id}>
            <T variant="h6" sx={{ fontSize: '1rem' }}>{coffee.title}</T>
            <img className={cls.img} src={coffee.image} alt={coffee.title} />
          </div>
        ))}
      </div>
    </Container>
  );
}
