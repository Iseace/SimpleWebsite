"use client";

import Image from 'next/image';
import { Typography as T } from '@mui/material';
import { styled } from "@mui/material/styles";
import { brown } from "@mui/material/colors";
import getClassPrefixer from "@/app/utils/getClassPrefixer";
import CoffeeBtn from '@/app/components/coffeeBtn/coffeeBtn';

const displayName = 'LandingPage';
const cls = getClassPrefixer(displayName);

const Container = styled('div')({
  backgroundColor: brown[50],
  display: 'flex',
  flexDirection: 'row',
  padding: '2rem',
  flex: 1,
  justifyContent: 'left',
  alignItems: 'center',
  minHeight: '100%',
  position: 'relative',

  [`& .${cls.card}`]: {
    width: 'auto',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    gap: '1rem',
    borderRadius: '1ch',
  },

  [`& .${cls.content}`]: {
    flex: 8,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function landingPage() {
  const handleCoffeeButtonClick = () => {
  };

  return (
    <Container>
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        zIndex: 10
      }}>
        <CoffeeBtn onClick={handleCoffeeButtonClick}>
          Order Coffee
        </CoffeeBtn>
      </div>

      <div className={cls.content}>
        <div className={cls.card}>
          <T variant="h2" component="h1">Welcome to the simplest website in the UTCH BIS</T>
          <T variant="h3">Want some coffee?</T>
          <T variant="h4">(The btns now work! 🎉)</T>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.card}>
          <Image
            src="/coffee-cup.png"
            width={600}
            height={600}
            alt='LandingPageImage'
            priority
          />
        </div>
      </div>
    </Container >
  );
}