import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#a6a6a6a',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
}));

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  padding: theme.spacing(4),
  backgroundColor: '#a6a6a6a',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  color: '#ffffff',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  color: '#f0f0f0',
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333333',
  color: '#ffffff',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: theme.spacing(3),
  margin: theme.spacing(1),
  '&:hover': {
    backgroundColor: '#555555',
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[6],
  },
  transition: 'all 0.3s ease',
}));

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <HeroContent>
          <HeroTitle variant="h1">
            Welcome to PumpFun Punks
          </HeroTitle>
          <HeroSubtitle variant="h4">
            Discover the most exclusive NFT collection with unique punk-style characters
            that will revolutionize your digital experience.
          </HeroSubtitle>
          <Box sx={{ mt: 4 }}>
            <StyledButton variant="contained" size="large">
              Explore Collection
            </StyledButton>
            <StyledButton variant="contained" size="large">
              Connect Wallet
            </StyledButton>
          </Box>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
