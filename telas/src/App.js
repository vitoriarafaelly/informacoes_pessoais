import React from 'react';
import {ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './Home'
import Routes from './Routes';


function App() {

  const theme = createMuiTheme({
    palette: {
      primary:{
        main: '#323751'
      },
      secondary:{
        main: '#fafafa'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>

  );
}

export default App;
