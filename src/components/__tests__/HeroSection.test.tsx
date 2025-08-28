import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroSection from '../HeroSection';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('HeroSection', () => {
  test('renders hero title', () => {
    renderWithTheme(<HeroSection />);
    const titleElement = screen.getByText(/Welcome to Jesus on Heaven/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders hero description', () => {
    renderWithTheme(<HeroSection />);
    const descriptionElement = screen.getByText(/lighthearted memecoin/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders explore collection button', () => {
    renderWithTheme(<HeroSection />);
    const exploreButton = screen.getByText(/Explore Collection/i);
    expect(exploreButton).toBeInTheDocument();
  });

  test('renders connect wallet button', () => {
    renderWithTheme(<HeroSection />);
    const connectButton = screen.getByText(/Connect Wallet/i);
    expect(connectButton).toBeInTheDocument();
  });
});
