import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Main } from './Components/Main';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme();


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
