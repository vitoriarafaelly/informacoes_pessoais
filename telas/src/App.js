import React from 'react';
import {ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './Home'


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
      <Home></Home>
    </ThemeProvider>

  );
}

export default App;
