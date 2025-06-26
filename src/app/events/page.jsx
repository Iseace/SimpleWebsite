"use client";

import React, { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography as T, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { brown } from "@mui/material/colors";
import getClassPrefixer from "@/app/utils/getClassPrefixer";
import CoffeeBtn from '@/app/components/coffeeBtn/coffeeBtn';

const displayName = 'OrderForm';
const cls = getClassPrefixer(displayName);

const PageContainer = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  padding: '1rem',
});

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 400,
  margin: '2rem auto',
  padding: theme.spacing(3),
  backgroundColor: brown[50],
  borderRadius: 10,
  boxShadow: `0 0 10px ${brown[100]}`,
  [`& .${cls.btn}`]: {
    mt: 2,
    backgroundColor: brown[700],
    '&:hover': { backgroundColor: brown[600] }
  },
  [`& .${cls.msgStyle}`]: {
    mt: 2,
    fontStyle: "italic",
    color: brown[800]
  },
}));

export default function OrderForm() {
  const [name, setName] = useState("");
  const [coffeeType, setCoffeeType] = useState("Americano");
  const [size, setSize] = useState("Mediano");
  const [sugar, setSugar] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `Gracias ${name}, tu ${coffeeType} tamaño ${size} ${sugar ? "con azúcar" : "sin azúcar"} está en camino.`;
    setMessage(finalMessage);
  };

  const handleCoffeeButtonClick = () => {
    alert("¡Vamos por más café! ☕");
  };

  return (
    <PageContainer>
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        zIndex: 10
      }}>
        <CoffeeBtn onClick={handleCoffeeButtonClick} />
      </div>

      <FormContainer component="form" onSubmit={handleSubmit}>
        <T variant="h5" gutterBottom>Pide tu café</T>

        <TextField
          fullWidth
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo de Café</InputLabel>
          <Select
            value={coffeeType}
            label="Tipo de Café"
            onChange={(e) => setCoffeeType(e.target.value)}
          >
            <MenuItem value="Americano">Americano</MenuItem>
            <MenuItem value="Latte">Latte</MenuItem>
            <MenuItem value="Capuchino">Capuchino</MenuItem>
            <MenuItem value="Espresso">Espresso</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" margin="normal">
          <T variant="subtitle1" sx={{ color: brown[700] }}>Tamaño</T>
          <RadioGroup
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{ color: brown[800] }}
          >
            <FormControlLabel value="Chico" control={<Radio />} label="Chico" />
            <FormControlLabel value="Mediano" control={<Radio />} label="Mediano" />
            <FormControlLabel value="Grande" control={<Radio />} label="Grande" />
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={sugar}
              onChange={(e) => setSugar(e.target.checked)}
            />
          }
          label="¿Agregar azúcar?"
        />

        <Button className={cls.btn} type="submit" variant="contained" fullWidth>
          Hacer pedido
        </Button>

        {message && (
          <T variant="body2" className={cls.msgStyle}>
            {message}
          </T>
        )}
      </FormContainer>
    </PageContainer>
  );
}