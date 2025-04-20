import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF69B4', // Hot pink color
    },
    secondary: {
      main: '#9370DB', // Medium purple
    },
    background: {
      default: '#0B1221', // Very dark blue
      paper: '#162033',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B7C9',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 25px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0B1221 0%, #162033 100%)',
          }}
        >
          <Navbar />
          <Home />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
