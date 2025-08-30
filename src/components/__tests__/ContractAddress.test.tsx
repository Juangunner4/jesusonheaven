import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContractAddress from '../ContractAddress';

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

describe('ContractAddress', () => {
  beforeEach(() => {
    (navigator.clipboard.writeText as jest.Mock).mockClear();
  });

  test('renders contract address section', () => {
    renderWithTheme(<ContractAddress />);
    
    expect(screen.getByText('Contract Address')).toBeInTheDocument();
    expect(screen.getByText('Click to copy the token contract address')).toBeInTheDocument();
  });

  test('displays default contract address', () => {
    renderWithTheme(<ContractAddress />);
    
    expect(screen.getByText('CONTRACT_ADDRESS_PLACEHOLDER')).toBeInTheDocument();
  });

  test('displays custom contract address when provided', () => {
    const customAddress = 'testAddress123456789';
    renderWithTheme(<ContractAddress address={customAddress} />);
    
    expect(screen.getByText(customAddress)).toBeInTheDocument();
  });

  test('copies address to clipboard when copy button is clicked', async () => {
    renderWithTheme(<ContractAddress />);
    
    const copyButton = screen.getByTitle('Copy contract address');
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('CONTRACT_ADDRESS_PLACEHOLDER');
    });
  });

  test('shows success message after copying', async () => {
    renderWithTheme(<ContractAddress />);
    
    const copyButton = screen.getByTitle('Copy contract address');
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(screen.getByText('Contract address copied to clipboard!')).toBeInTheDocument();
    });
  });

  test('shows check icon after successful copy', async () => {
    renderWithTheme(<ContractAddress />);
    
    const copyButton = screen.getByTitle('Copy contract address');
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      const checkIcon = screen.getByTestId('CheckIcon');
      expect(checkIcon).toBeInTheDocument();
    });
  });
});
