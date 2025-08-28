import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroSection from '../HeroSection';

// Mock the clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

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
    const titleElement = screen.getByText(/Welcome to \$JESUS on Heaven/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders hero description', () => {
    renderWithTheme(<HeroSection />);
    const descriptionElement = screen.getByText(/lighthearted memecoin/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders navigation bar', () => {
    renderWithTheme(<HeroSection />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders contract address section', () => {
    renderWithTheme(<HeroSection />);
    const contractTitle = screen.getByText(/Contract Address/i);
    const contractAddress = screen.getByText(/2nmowg87Jbo55Uc3yWaeeSZ6DnDBhpoVMiQKMdKfv777/i);
    expect(contractTitle).toBeInTheDocument();
    expect(contractAddress).toBeInTheDocument();
  });

  test('renders community section', () => {
    renderWithTheme(<HeroSection />);
    const communityText = screen.getByText(/Join our heavenly community/i);
    expect(communityText).toBeInTheDocument();
  });
});
