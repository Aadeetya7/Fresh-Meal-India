import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Header from './Components/Header'
import { useState } from 'react'
import { Outlet } from 'react-router';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  // Light & Dark theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      custom: {
        headerBackground: '#e06377', // dark muted purple for header background
        headerText: '#fffff'        // soft yellow for header text
      },
      // background: {
      //   default: '#fff9f0',    // very light off-white
      //   paper: '#fffdf5'       // card/paper background
      // },
      // text: {
      //   primary: '#6b5b95',    // muted purple
      //   secondary: '#8c7fa3'   // lighter variation of purple
      // },
      // primary: {
      //   main: '#6b5b95',       // base purple
      //   light: '#8776ac',      // lighter variation
      //   dark: '#4f3f6f'        // darker variation
      // },
      // secondary: {
      //   main: '#feb236',       // base soft yellow/orange
      //   light: '#ffcd66',      // lighter variation
      //   dark: '#c78f2b'        // darker variation
      // }
    }
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      custom: {
        headerBackground: '#e06377', // dark muted purple for header background
        headerText: '#0000'        // soft yellow for header text
      },
      // background: {
      //   default: '#1a1625',   // dark purple/gray
      //   paper: '#2a2239'      // card/paper background
      // },
      // text: {
      //   primary: '#feb236',   // soft yellow
      //   secondary: '#ffe08c'  // lighter yellow
      // },
      // primary: {
      //   main: '#6b5b95',       // muted purple
      //   light: '#8776ac',      // lighter variation
      //   dark: '#4f3f6f'        // darker variation
      // },
      // secondary: {
      //   main: '#feb236',       // soft yellow
      //   light: '#ffcd66',      // lighter variation
      //   dark: '#c78f2b'        // darker variation
      // }
    }
  });
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
        <CssBaseline />
        <Container disableGutters sx={{ paddingLeft: "16px", paddingRight: "16px", marginTop: "80px" }}>
          <Header handleClick={handleToggle} />
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
