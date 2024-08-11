import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Typography } from '@mui/material'

function App() {
  
  return (
    <Container sx={{bgcolor: "tomato", height: "100vh"}}>
      Hello world
      <Typography variant='h1'>Hello world!</Typography>
    </Container>
  )
}

export default App
