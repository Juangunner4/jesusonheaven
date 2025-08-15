import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Separator } from '@radix-ui/react-separator';

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#a6a6a6',
  padding: theme.spacing(8, 0),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: '#f0f0f0',
  lineHeight: 1.6,
}));

const FeaturesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const features = [
  {
    title: 'Unique Designs',
    description: 'Each PumpFun Punk is uniquely generated with rare traits and characteristics that make them one of a kind.',
  },
  {
    title: 'Blockchain Verified',
    description: 'All NFTs are secured on the blockchain with verified ownership and authenticity guaranteed.',
  },
  {
    title: 'Community Driven',
    description: 'Join a vibrant community of collectors and enthusiasts who share the passion for digital art.',
  },
  {
    title: 'Exclusive Benefits',
    description: 'Holders get access to exclusive events, drops, and special privileges within the ecosystem.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">
          Why Choose PumpFun Punks?
        </SectionTitle>
        <Separator style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.3)', 
          height: '2px', 
          margin: '2rem 0' 
        }} />
        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.title}>
              <CardContent>
                <FeatureTitle variant="h5">
                  {feature.title}
                </FeatureTitle>
                <FeatureDescription variant="body1">
                  {feature.description}
                </FeatureDescription>
              </CardContent>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </SectionContainer>
  );
};

export default FeaturesSection;
