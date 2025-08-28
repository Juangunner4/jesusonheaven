import React from 'react';
import { Container, Box, Typography, Link, Button } from '@mui/material';
import { X as TwitterIcon } from '@mui/icons-material';
import NavigationBar from './NavigationBar';
import ContractAddress from './ContractAddress';
import About from './About';
import Tokenomics from './Tokenomics';
import Footer from './Footer';
import './HeroSection.css';
import './Layout.css';

export const HeroSection: React.FC = () => {
    return (
        <>
            {/* Navigation Bar - Sticky at top center */}
            <NavigationBar />
            
            <div className="hero-container">
                <Container maxWidth="lg">
                    <div className="hero-content">
                        {/* Token Image - Floating above welcome message */}
                        <Box 
                            sx={{ 
                                textAlign: 'center', 
                                marginBottom: 4,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    animation: 'tokenFloat 3s ease-in-out infinite',
                                    '@keyframes tokenFloat': {
                                        '0%, 100%': { transform: 'translateY(0px)' },
                                        '50%': { transform: 'translateY(-10px)' }
                                    }
                                }}
                            >
                                <img
                                    src="/tokenImage.png"
                                    alt="$JESUS Token"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        border: '4px solid #ffffff',
                                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2), 0 0 0 8px rgba(255, 255, 255, 0.1)',
                                        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Main Hero Content */}
                        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                            <Typography 
                                variant="h1" 
                                className="hero-title"
                                sx={{ 
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 700,
                                    marginBottom: 3,
                                    color: '#000000',
                                }}
                            >
                                Welcome to $JESUS on Heaven
                            </Typography>
                            
                            <Typography 
                                variant="h5" 
                                className="main-description"
                                sx={{ 
                                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                                    lineHeight: 1.7,
                                    color: '#000000',
                                    marginBottom: 4,
                                    fontWeight: 400,
                                    maxWidth: '800px',
                                    margin: '0 auto 32px auto'
                                }}
                            >
                                $JESUS on Heaven is a lighthearted memecoin celebrating faith and community on the Solana blockchain.
                            </Typography>
                        </Box>

                        {/* Contract Address Section */}
                        <Box sx={{ marginTop: 4, marginBottom: 4 }}>
                            <ContractAddress />
                        </Box>

                        {/* Floating Logos Section */}
                        <Box 
                            sx={{ 
                                marginTop: 3, 
                                marginBottom: 4,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 3
                            }}
                        >
                            <Box
                                component={Link}
                                href="https://heaven.xyz/token/GWnVxSXKRQvHBXeo9dcZBM82EKLv5bCwPGKPEvGSPPxw"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'inline-block',
                                    animation: 'logoFloat 4s ease-in-out infinite',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1) translateY(-5px)',
                                    },
                                    '@keyframes logoFloat': {
                                        '0%, 100%': { transform: 'translateY(0px)' },
                                        '50%': { transform: 'translateY(-8px)' }
                                    }
                                }}
                            >
                                <img
                                    src="/heavendexlogo.png"
                                    alt="HeavenDex"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                        border: '2px solid rgba(255, 255, 255, 0.8)',
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Additional Content Section */}
                        <Box sx={{ marginTop: 6, textAlign: 'center' }}>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    color: '#000000',
                                    fontWeight: 500,
                                    marginBottom: 2
                                }}
                            >
                                Join our heavenly community
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: '#000000',
                                    maxWidth: '600px',
                                    margin: '0 auto 24px auto',
                                    lineHeight: 1.6
                                }}
                            >
                                Experience the divine power of memes and cryptocurrency combined. 
                                Together, we're building something truly blessed on the Solana blockchain.
                            </Typography>
                            
                            {/* Community Link */}
                            <Button
                                component={Link}
                                href="https://x.com/i/communities/1959468207837712667"
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<TwitterIcon />}
                                sx={{
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '25px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#333333',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                Join Community
                            </Button>
                        </Box>
                    </div>
                </Container>
            </div>
            
            {/* About Section */}
            <About />
            
            {/* Tokenomics Section */}
            <Tokenomics />
            
            {/* Footer */}
            <Footer />
        </>
    );
};

export default HeroSection;
