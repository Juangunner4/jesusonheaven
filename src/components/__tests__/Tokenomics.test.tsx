import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tokenomics from '../Tokenomics';

describe('Tokenomics Component', () => {
  test('renders tokenomics title', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Tokenomics')).toBeInTheDocument();
  });

  test('renders key metrics section', () => {
    render(<Tokenomics />);
    expect(screen.getByText('$JESUS Key Metrics')).toBeInTheDocument();
    expect(screen.getByText('Platform')).toBeInTheDocument();
    expect(screen.getByText('Solana')).toBeInTheDocument();
    expect(screen.getAllByText('Fair Launch')[0]).toBeInTheDocument();
  });

  test('renders market metrics', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Liquidity')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('24h Performance')).toBeInTheDocument();
  });

  test('renders fair launch section', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Fair Launch on Solana')).toBeInTheDocument();
    expect(screen.getByText(/Detailed DEX tokenomics will be shared/)).toBeInTheDocument();
  });
});

