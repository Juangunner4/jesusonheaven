import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tokenomics from '../Tokenomics';

// Mock Material-UI components for testing
jest.mock('@mui/material/styles', () => ({
  styled: (component: any) => (styles: any) => component,
}));

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
    expect(screen.getByText('Heaven DEX')).toBeInTheDocument();
  });

  test('renders market metrics', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Liquidity')).toBeInTheDocument();
    expect(screen.getByText('~$12K')).toBeInTheDocument();
    expect(screen.getByText('Market Cap')).toBeInTheDocument();
    expect(screen.getByText('~$21K')).toBeInTheDocument();
    expect(screen.getByText('24h Performance')).toBeInTheDocument();
    expect(screen.getByText('+41%')).toBeInTheDocument();
  });

  test('renders heaven dex information', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Heaven DEX & The God Flywheel')).toBeInTheDocument();
    expect(screen.getByText('What is Heaven DEX?')).toBeInTheDocument();
    expect(screen.getByText('The "God Flywheel" Mechanism')).toBeInTheDocument();
  });

  test('renders unique narrative section', () => {
    render(<Tokenomics />);
    expect(screen.getByText('Unique Narrative')).toBeInTheDocument();
    expect(screen.getByText(/first \$JESUS on Heaven DEX/)).toBeInTheDocument();
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
    expect(screen.getByText('First $JESUS on Heaven')).toBeInTheDocument();
    expect(screen.getByText('Community Charity Support')).toBeInTheDocument();
    expect(screen.getByText('Automated Deflation')).toBeInTheDocument();
    expect(screen.getByText('Fair Launch Protection')).toBeInTheDocument();
  });
});
