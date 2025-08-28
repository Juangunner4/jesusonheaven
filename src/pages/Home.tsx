import React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { Theme } from '@radix-ui/themes';
import HeroSection from '../components/HeroSection';

// Create custom MUI theme with the specified background color
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
    // body styles intentionally left to global CSS to allow background image
      },
    },
  },
});

const PageContainer = styled(Box)(() => ({
  backgroundColor: 'transparent',
  minHeight: '100vh',
  width: '100%',
}));

export const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Theme>
        <CssBaseline />
        <PageContainer>
          <HeroSection />
        </PageContainer>
      </Theme>
    </ThemeProvider>
  );
};

export default Home;
