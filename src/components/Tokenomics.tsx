import React from 'react';
import { Container, Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TrendingUp } from '@mui/icons-material';

const TokenomicsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '16px 0 40px 0',
  position: 'relative',
}));

const TokenomicsContent = styled(Container)({
  backgroundColor: 'transparent',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const SectionTitle = styled(Typography)({
  color: '#000000',
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '32px',
  fontFamily: 'Helvetica Now, Helvetica, Arial, sans-serif',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
});

const SubsectionTitle = styled(Typography)({
  color: '#000000',
  fontSize: '1.8rem',
  fontWeight: 600,
  marginBottom: '24px',
  marginTop: '40px',
  fontFamily: 'Helvetica Now, Helvetica, Arial, sans-serif',
  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
});

const MetricCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(227, 242, 253, 0.3)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(227, 242, 253, 0.5)',
  },
}));

const MetricTitle = styled(Typography)({
  color: '#000000',
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '8px',
  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
});

const MetricValue = styled(Typography)({
  color: '#000000',
  fontSize: '1.4rem',
  fontWeight: 700,
  textShadow: '1px 1px 3px rgba(255, 255, 255, 0.9)',
});

const MetricSubtext = styled(Typography)({
  color: '#000000',
  fontSize: '0.9rem',
  marginTop: '4px',
  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
});

const FeatureBox = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid rgba(227, 242, 253, 0.3)',
  marginBottom: '20px',
  backdropFilter: 'blur(5px)',
});

const FeatureTitle = styled(Typography)({
  color: '#000000',
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: '12px',
  textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const FeatureText = styled(Typography)({
  color: '#000000',
  fontSize: '1rem',
  lineHeight: 1.6,
  marginBottom: '8px',
  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)',
});

const HighlightChip = styled(Chip)({
  backgroundColor: 'rgba(248, 217, 138, 0.7)',
  color: '#000000',
  fontWeight: 600,
  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
  border: '1px solid rgba(248, 217, 138, 0.8)',
  margin: '4px',
});

export const Tokenomics: React.FC = () => {
  return (
    <TokenomicsContainer id="tokenomics">
      <TokenomicsContent>
        <SectionTitle>Tokenomics</SectionTitle>

        <SubsectionTitle>$JESUS Key Metrics</SubsectionTitle>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            marginBottom: '40px',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ flex: '1 1 250px', minWidth: '250px', maxWidth: '300px' }}>
            <MetricCard>
              <CardContent>
                <MetricTitle>Platform</MetricTitle>
                <MetricValue>Solana</MetricValue>
                <MetricSubtext>Fair Launch</MetricSubtext>
              </CardContent>
            </MetricCard>
          </Box>

          <Box sx={{ flex: '1 1 250px', minWidth: '250px', maxWidth: '300px' }}>
            <MetricCard>
              <CardContent>
                <MetricTitle>Liquidity</MetricTitle>
                <MetricValue>--</MetricValue>
                <MetricSubtext>Paired with SOL</MetricSubtext>
              </CardContent>
            </MetricCard>
          </Box>

          <Box sx={{ flex: '1 1 250px', minWidth: '250px', maxWidth: '300px' }}>
            <MetricCard>
              <CardContent>
                <MetricTitle>Market Cap</MetricTitle>
                <MetricValue>--</MetricValue>
                <MetricSubtext>USD FDV</MetricSubtext>
              </CardContent>
            </MetricCard>
          </Box>

          <Box sx={{ flex: '1 1 250px', minWidth: '250px', maxWidth: '300px' }}>
            <MetricCard>
              <CardContent>
                <MetricTitle>24h Performance</MetricTitle>
                <MetricValue>--</MetricValue>
                <MetricSubtext>On-chain tracking</MetricSubtext>
              </CardContent>
            </MetricCard>
          </Box>
        </Box>

        <FeatureBox>
          <FeatureTitle>
            <TrendingUp />
            Fair Launch on Solana
          </FeatureTitle>
          <FeatureText>
            $JESUS will be launched fairly on the Solana blockchain. Detailed DEX tokenomics will be shared at a later time.
          </FeatureText>
          <Box sx={{ marginTop: '12px' }}>
            <HighlightChip label="Solana Chain" />
            <HighlightChip label="Fair Launch" />
          </Box>
        </FeatureBox>
      </TokenomicsContent>
    </TokenomicsContainer>
  );
};

export default Tokenomics;

