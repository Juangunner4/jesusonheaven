import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: theme.spacing(6, 4),
    paddingTop: '10vh',
}));

const HeroContent = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    maxWidth: '900px',
    padding: theme.spacing(6),
    backgroundColor: '#ffffff',
    borderRadius: theme.spacing(3),
}));

const LogoImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    height: 'auto',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        maxWidth: '80%',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '90%',
    },
}));

const MainDescription = styled(Typography)(({ theme }) => ({
    fontSize: '1.3rem',
    lineHeight: 1.7,
    color: '#333333',
    marginBottom: theme.spacing(3),
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem',
    },
}));

const SubDescription = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#666666',
    marginBottom: theme.spacing(4),
    opacity: 0.9,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
}));

export const HeroSection: React.FC = () => {
    return (
        <HeroContainer>
            <Container maxWidth="lg">
                <HeroContent>
                    <LogoImage
                        src="/PUMPFUNPunks.png"
                        alt="PumpFun Punks Logo"
                    />
                    <MainDescription>
                        Pump Fun Punks are 2,000 uniquely generated 24×24 pixel-art characters, 
                        with proof of ownership permanently stored on the Solana blockchain.
                        They are the first PFP collection to originate entirely from the Pump.fun ecosystem.
                        Minted for 0.069 SOL as both a collectible and a cultural marker for Solana’s most active memecoin community.
                    </MainDescription>
                </HeroContent>
            </Container>
        </HeroContainer>
    );
};

export default HeroSection;
