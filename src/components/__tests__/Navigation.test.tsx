import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navigation from '../Navigation';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Navigation', () => {
  test('renders logo', () => {
    renderWithTheme(<Navigation />);
    const logoElement = screen.getByText(/PumpFun Punks/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithTheme(<Navigation />);
    
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Collection/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  test('renders connect wallet button', () => {
    renderWithTheme(<Navigation />);
    const connectButton = screen.getByText(/Connect Wallet/i);
    expect(connectButton).toBeInTheDocument();
  });
});
