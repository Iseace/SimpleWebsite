'use client';
import Link from 'next/link';
import { styled } from "@mui/material/styles";
import { Button, Typography as T } from '@mui/material';
import { brown } from "@mui/material/colors";
import getClassPrefixer from "@/app/utils/getClassPrefixer";

const displayName = 'Sidebar';
const cls = getClassPrefixer(displayName);

const Container = styled('div')({
  backgroundColor: brown[500],
  padding: '1.5rem 1rem',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  [`& .${cls.titleContainer}`]: {
    padding: '1rem',
    color: brown[50],
    width: '100%',
  },
  [`& .${cls.btnContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
  },
  [`& .${cls.button}`]: {
    justifyContent: 'flex-start',
    color: brown[50],
    fontWeight: 500,
    textTransform: 'none',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    width: '100%',
    '&:hover': {
      backgroundColor: brown[600],
    }
  }
});

const Sidebar = () => {
  return (
    <Container>
      <div className={cls.titleContainer}>
        <T variant="h4">Discover</T>
      </div>
      <div className={cls.btnContainer}>
        <Link href="/search" passHref>
          <Button className={cls.button}>Search</Button>
        </Link>
        <Link href="/events" passHref>
          <Button className={cls.button}>Events</Button>
        </Link>
        <Link href="/services" passHref>
          <Button className={cls.button}>Services</Button>
        </Link>
        <Link href="/about" passHref>
          <Button className={cls.button}>About me</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;