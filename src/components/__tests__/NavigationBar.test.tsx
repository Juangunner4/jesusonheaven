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
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
  });

  test('renders heaven logo', () => {
    renderWithTheme(<NavigationBar />);
    
    const logo = screen.getByAltText('Heaven Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('lightheaven.gif'));
  });

  test('has correct navigation structure', () => {
    renderWithTheme(<NavigationBar />);
    
    const toolbar = screen.getByRole('toolbar');
    expect(toolbar).toBeInTheDocument();
  });
});
