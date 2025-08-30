import React from 'react';
import { Box, Typography, Link, Container, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { OpenInNew } from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '24px 0',
  marginTop: 'auto',
}));

const FooterContent = styled(Container)({
  textAlign: 'center',
  maxWidth: '1000px',
});

const CopyrightText = styled(Typography)({
  color: '#000000',
  fontSize: '0.9rem',
  marginBottom: '16px',
  fontWeight: 500,
});

const DisclaimerText = styled(Typography)({
  color: '#000000',
  fontSize: '0.85rem',
  lineHeight: 1.6,
  marginBottom: '20px',
  maxWidth: '800px',
  margin: '0 auto 20px auto',
});

const ContractLink = styled(Link)({
  color: '#000000',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#333333',
    textDecoration: 'underline',
  },
});

interface FooterProps {
  contractAddress?: string;
}

export const Footer: React.FC<FooterProps> = ({
  contractAddress = "CONTRACT_ADDRESS_PLACEHOLDER"
}) => {
  const solscanUrl = `https://solscan.io/token/${contractAddress}`;

  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          ©2025 JESUS. All rights reserved.
        </CopyrightText>
        
        <Divider sx={{ margin: '16px 0', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
        
        <DisclaimerText>
          <strong>Disclaimer:</strong> $JESUS is a memecoin and has no utility. Don't risk money you are afraid of losing. 
          The price may go up or down. We are not responsible for the token's price. Amen.
        </DisclaimerText>
        
        <ContractLink 
          href={solscanUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Contract
          <OpenInNew fontSize="small" />
        </ContractLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
