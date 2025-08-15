import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturesSection from '../FeaturesSection';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('FeaturesSection', () => {
  test('renders section title', () => {
    renderWithTheme(<FeaturesSection />);
    const titleElement = screen.getByText(/Why Choose PumpFun Punks?/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all feature cards', () => {
    renderWithTheme(<FeaturesSection />);
    
    expect(screen.getByText(/Unique Designs/i)).toBeInTheDocument();
    expect(screen.getByText(/Blockchain Verified/i)).toBeInTheDocument();
    expect(screen.getByText(/Community Driven/i)).toBeInTheDocument();
    expect(screen.getByText(/Exclusive Benefits/i)).toBeInTheDocument();
  });

  test('renders feature descriptions', () => {
    renderWithTheme(<FeaturesSection />);
    
    expect(screen.getByText(/Each PumpFun Punk is uniquely generated/i)).toBeInTheDocument();
    expect(screen.getByText(/All NFTs are secured on the blockchain/i)).toBeInTheDocument();
    expect(screen.getByText(/Join a vibrant community/i)).toBeInTheDocument();
    expect(screen.getByText(/Holders get access to exclusive events/i)).toBeInTheDocument();
  });
});
