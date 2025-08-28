import React from 'react';
import { Container, Button, Stack } from '@mui/material';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
    return (
        <div className="hero-container">
            <Container maxWidth="lg">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Jesus on Heaven</h1>
                    <p className="main-description">
                        Jesus on Heaven is a lighthearted memecoin celebrating faith and community on the Solana blockchain.
                    </p>
                    <Stack direction="row" spacing={2} className="hero-buttons">
                        <Button variant="contained" color="primary">Explore Collection</Button>
                        <Button variant="outlined" color="primary">Connect Wallet</Button>
                    </Stack>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
