"use client";

import { styled } from "@mui/material/styles";
import { brown } from "@mui/material/colors";
import { Box, Typography as T } from "@mui/material";
import getClassPrefixer from "@/app/utils/getClassPrefixer";

const displayName = 'Footer';
const cls = getClassPrefixer(displayName);

const Container = styled(Box)({
  backgroundColor: brown[700],
  padding: '1.5rem 1rem',
  color: 'white',
  marginTop: 'auto',
  [`& .${cls.content}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '1rem',
  }
});

const Footer = () => {
  return (
    <Container>
      <div className={cls.content}>
        <T variant='h6'>© Simple Website. All rights reserved. </T>
      </div>
    </Container>
  );
}

export default Footer;