import React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { Theme } from '@radix-ui/themes';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import FeaturesSection from '../components/FeaturesSection';

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
      default: '#a6a6a6',
      paper: '#a6a6a6',
    },
    text: {
      primary: '#ffffff',
      secondary: '#f0f0f0',
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
        body: {
          backgroundColor: '#a6a6a6',
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

const PageContainer = styled(Box)(() => ({
  backgroundColor: '#a6a6a6',
  minHeight: '100vh',
  width: '100%',
}));

export const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Theme>
        <CssBaseline />
        <PageContainer>
          <Navigation />
          <HeroSection />
          <FeaturesSection />
        </PageContainer>
      </Theme>
    </ThemeProvider>
  );
};

export default Home;
