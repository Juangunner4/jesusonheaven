import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Roadmap from '../Roadmap';

describe('Roadmap Component', () => {
  test('renders roadmap title', () => {
    render(<Roadmap />);
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
  });

  test('renders first layer', () => {
    render(<Roadmap />);
    expect(screen.getByText(/Layer 1: \$0 – \$100K/)).toBeInTheDocument();
  });
});

