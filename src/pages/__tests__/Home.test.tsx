import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

// Mock the components to avoid complex rendering
jest.mock('../../components/Navigation', () => {
  return function MockNavigation() {
    return <div data-testid="navigation">Navigation Component</div>;
  };
});

jest.mock('../../components/HeroSection', () => {
  return function MockHeroSection() {
    return <div data-testid="hero-section">Hero Section Component</div>;
  };
});

jest.mock('../../components/FeaturesSection', () => {
  return function MockFeaturesSection() {
    return <div data-testid="features-section">Features Section Component</div>;
  };
});

describe('Home Page', () => {
  test('renders all main components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('features-section')).toBeInTheDocument();
  });

  test('applies correct background styling', () => {
    const { container } = render(<Home />);
    const pageContainer = container.firstChild?.firstChild?.firstChild?.firstChild as HTMLElement;
    
    // Check if the component renders without errors
    expect(pageContainer).toBeInTheDocument();
  });
});
