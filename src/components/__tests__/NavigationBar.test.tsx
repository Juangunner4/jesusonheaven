import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavigationBar from '../NavigationBar';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('NavigationBar', () => {
  test('renders all navigation items', () => {
    renderWithTheme(<NavigationBar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Tokenomics')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
  });

  test('renders site logo', () => {
    renderWithTheme(<NavigationBar />);

    const logo = screen.getByAltText('Site Logo Light');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo-light.gif'));
  });

  test('has correct navigation structure', () => {
    renderWithTheme(<NavigationBar />);

    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });
});
