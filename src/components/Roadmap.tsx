import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const RoadmapContainer = styled(Box)({
  backgroundColor: 'transparent',
  padding: '40px 0',
  position: 'relative',
});

const RoadmapContent = styled(Container)({
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

const LayerBox = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid rgba(227, 242, 253, 0.3)',
  marginBottom: '20px',
  backdropFilter: 'blur(5px)',
});

const LayerTitle = styled(Typography)({
  color: '#000000',
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: '12px',
  textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)',
});

const LayerList = styled('ul')({
  margin: 0,
  paddingLeft: '20px',
  color: '#000000',
});

const LayerListItem = styled('li')({
  marginBottom: '8px',
  lineHeight: 1.6,
  textShadow: '1px 1px 2px rgba(255, 255, 255, 0.6)',
});

export const Roadmap: React.FC = () => {
  return (
    <RoadmapContainer id="roadmap">
      <RoadmapContent>
        <SectionTitle>Roadmap</SectionTitle>

        <SubsectionTitle>Website Additions</SubsectionTitle>
        <LayerBox>
          <LayerList>
            <LayerListItem>Sunday & Wednesday service</LayerListItem>
            <LayerListItem>Daily bible verse with breakdown</LayerListItem>
          </LayerList>
        </LayerBox>

        <SubsectionTitle>✝️ $JESUS Coin Roadmap (From Launch → $1B)</SubsectionTitle>

        <LayerBox>
          <LayerTitle>Layer 1: $0 – $100K (The Beginning)</LayerTitle>
          <LayerList>
            <LayerListItem>Token launch & liquidity locked</LayerListItem>
            <LayerListItem>Build social X</LayerListItem>
            <LayerListItem>Establish community relationship, spread the love of Jesus</LayerListItem>
          </LayerList>
        </LayerBox>

        <LayerBox>
          <LayerTitle>Layer 2: $100K – $1M (The Resurrection)</LayerTitle>
          <LayerList>
            <LayerListItem>First 1,000 holders</LayerListItem>
            <LayerListItem>CoinGecko + CoinMarketCap listing</LayerListItem>
            <LayerListItem>Weekly X “services” (Sunday & Wednesday)</LayerListItem>
            <LayerListItem>First charity donation poll</LayerListItem>
          </LayerList>
        </LayerBox>

        <LayerBox>
          <LayerTitle>Layer 3: $1M – $10M (The Sermon Spreads)</LayerTitle>
          <LayerList>
            <LayerListItem>Meme contests + NFT drop (“Bible Characters”)</LayerListItem>
            <LayerListItem>Partnerships with other biblical projects</LayerListItem>
            <LayerListItem>Tier 3/2 exchange listing</LayerListItem>
            <LayerListItem>10,000 holders milestone</LayerListItem>
          </LayerList>
        </LayerBox>

        <LayerBox>
          <LayerTitle>Layer 4: $10M – $100M (The Miracles)</LayerTitle>
          <LayerList>
            <LayerListItem>Merch store powered by $JESUS</LayerListItem>
            <LayerListItem>Regular charity donations baked into tokenomics</LayerListItem>
            <LayerListItem>Bigger CEX listings (Gate, KuCoin, Bybit, moonshot)</LayerListItem>
            <LayerListItem>50,000+ holders milestone</LayerListItem>
          </LayerList>
        </LayerBox>

        <LayerBox>
          <LayerTitle>Layer 5: $100M – $1B (Eternal Life)</LayerTitle>
          <LayerList>
            <LayerListItem>Major CEX listings (Binance, Coinbase)</LayerListItem>
            <LayerListItem>Global branding campaigns</LayerListItem>
            <LayerListItem>100,000+ holders worldwide</LayerListItem>
            <LayerListItem>Cemented as the faith + fun meme coin</LayerListItem>
          </LayerList>
        </LayerBox>
      </RoadmapContent>
    </RoadmapContainer>
  );
};

export default Roadmap;

