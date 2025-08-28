import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '../Footer';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Footer', () => {
  test('renders copyright text', () => {
    renderWithTheme(<Footer />);
    
    expect(screen.getByText('©2025 JESUS. All rights reserved.')).toBeInTheDocument();
  });

  test('renders disclaimer text', () => {
    renderWithTheme(<Footer />);
    
    expect(screen.getByText(/\$JESUS is a memecoin and has no utility/i)).toBeInTheDocument();
    expect(screen.getByText(/Don't risk money you are afraid of losing/i)).toBeInTheDocument();
    expect(screen.getByText(/Amen/i)).toBeInTheDocument();
  });

  test('renders contract link with default address', () => {
    renderWithTheme(<Footer />);
    
    const contractLink = screen.getByText('View Contract');
    expect(contractLink).toBeInTheDocument();
    expect(contractLink.closest('a')).toHaveAttribute(
      'href', 
      'https://solscan.io/token/2nmowg87Jbo55Uc3yWaeeSZ6DnDBhpoVMiQKMdKfv777'
    );
    expect(contractLink.closest('a')).toHaveAttribute('target', '_blank');
    expect(contractLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders contract link with custom address', () => {
    const customAddress = 'testContractAddress123';
    renderWithTheme(<Footer contractAddress={customAddress} />);
    
    const contractLink = screen.getByText('View Contract');
    expect(contractLink.closest('a')).toHaveAttribute(
      'href', 
      `https://solscan.io/token/${customAddress}`
    );
  });

  test('has proper footer structure', () => {
    renderWithTheme(<Footer />);
    
    // Check that all main elements are present
    expect(screen.getByText('©2025 JESUS. All rights reserved.')).toBeInTheDocument();
    expect(screen.getByText('Disclaimer:')).toBeInTheDocument();
    expect(screen.getByText('View Contract')).toBeInTheDocument();
  });

  test('external link icon is present', () => {
    renderWithTheme(<Footer />);
    
    const linkIcon = screen.getByTestId('OpenInNewIcon');
    expect(linkIcon).toBeInTheDocument();
  });
});
