import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import About from '../About';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('About', () => {
  test('renders about title', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText('About $JESUS')).toBeInTheDocument();
  });

  test('renders launch information', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText('$JESUS was launched on 23:21:54 Aug 21, 2025')).toBeInTheDocument();
  });

  test('renders introduction text', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText(/Jesus' most important teachings center on loving God/i)).toBeInTheDocument();
    expect(screen.getByText(/Golden Rule/i)).toBeInTheDocument();
  });

  test('renders The Greatest Commandment section', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText('The Greatest Commandment')).toBeInTheDocument();
    expect(screen.getByText('Love God:')).toBeInTheDocument();
    expect(screen.getByText('Love Your Neighbor:')).toBeInTheDocument();
    expect(screen.getByText(/You shall love the Lord your God/i)).toBeInTheDocument();
  });

  test('renders Core Principles section', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText('Core Principles')).toBeInTheDocument();
    expect(screen.getByText('Love and Compassion:')).toBeInTheDocument();
    expect(screen.getByText('Forgiveness:')).toBeInTheDocument();
    expect(screen.getByText('Humility and Service:')).toBeInTheDocument();
    expect(screen.getByText('The Kingdom of God:')).toBeInTheDocument();
  });

  test('renders Actionable Teachings section', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText('Actionable Teachings')).toBeInTheDocument();
    expect(screen.getByText('Have Faith:')).toBeInTheDocument();
    expect(screen.getByText('Repent and Believe:')).toBeInTheDocument();
    expect(screen.getByText('Follow and Sacrifice:')).toBeInTheDocument();
    expect(screen.getByText('Make Disciples:')).toBeInTheDocument();
  });

  test('has proper id for navigation', () => {
    renderWithTheme(<About />);
    
    const aboutSection = screen.getByText('About $JESUS').closest('[id="about"]');
    expect(aboutSection).toBeInTheDocument();
  });

  test('renders all teaching content', () => {
    renderWithTheme(<About />);
    
    expect(screen.getByText(/Be merciful and compassionate/i)).toBeInTheDocument();
    expect(screen.getByText(/Forgive those who wrong you/i)).toBeInTheDocument();
    expect(screen.getByText(/Trust in God and seek His guidance/i)).toBeInTheDocument();
    expect(screen.getByText(/Take up your cross daily/i)).toBeInTheDocument();
  });
});
