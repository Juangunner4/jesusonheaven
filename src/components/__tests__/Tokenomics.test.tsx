import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tokenomics from '../Tokenomics';

// Mock Material-UI components for testing

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
    expect(screen.getByText('DEX')).toBeInTheDocument();
  });

  test('renders market metrics', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Liquidity')).toBeInTheDocument();
    expect(screen.getAllByText('--')[0]).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getAllByText('--')[1]).toBeInTheDocument();
    expect(screen.getByText('24h Performance')).toBeInTheDocument();
    expect(screen.getAllByText('--')[2]).toBeInTheDocument();
    expect(screen.getByText('USD FDV')).toBeInTheDocument();
    expect(screen.getByText('On-chain tracking')).toBeInTheDocument();
  });

  test('renders dex information', () => {
    render(<Tokenomics />);
    expect(screen.getByText('DEX & Token Flywheel')).toBeInTheDocument();
    expect(screen.getByText('What is this DEX?')).toBeInTheDocument();
    expect(screen.getByText('Token Buyback Mechanism')).toBeInTheDocument();
  });

  test('renders unique narrative section', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Unique Narrative')).toBeInTheDocument();
    expect(screen.getByText(/first \$JESUS on a DEX/)).toBeInTheDocument();
  });

  test('renders anti-mev measures section', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Anti-MEV Measures & Fee Structure')).toBeInTheDocument();
    expect(screen.getByText(/Sniper Tax/)).toBeInTheDocument();
    expect(screen.getByText(/Tiered Fee Structure/)).toBeInTheDocument();
  });

  test('renders holder benefits section', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Why It Matters for $JESUS Holders')).toBeInTheDocument();
    expect(screen.getByText(/automated deflation/)).toBeInTheDocument();
  });

  test('renders highlight chips', () => {
    render(<Tokenomics />);
    expect(screen.getByText('First $JESUS on DEX')).toBeInTheDocument();
    expect(screen.getByText('Community Charity Support')).toBeInTheDocument();
    expect(screen.getByText('Automated Deflation')).toBeInTheDocument();
    expect(screen.getByText('Fair Launch Protection')).toBeInTheDocument();
  });
});
