import React from 'react';
import { Container } from '@mui/material';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
    return (
        <div className="hero-container">
            <Container maxWidth="lg">
                <div className="hero-content">
                    <img
                        className="logo-image"
                        src="/PUMPFUNPunks.png"
                        alt="PumpFun Punks Logo"
                    />
                    <div className="main-description">
                        Pump Fun Punks are 2,000 uniquely generated 24×24 pixel-art characters,
                        with proof of ownership permanently stored on the Solana blockchain.
                        They are the first PFP collection to originate entirely from the Pump.fun ecosystem.
                        Minted for 0.069 SOL as both a collectible and a cultural marker for Solana's most active memecoin community.
                    </div>
                    
                    <div className="about-section">
                        <h2 className="about-title">What is a Pump Fun Punk?</h2>
                        <p className="about-text">
                            Pump Fun Punks are 24×24 pixel-art characters, generated algorithmically and stored as compressed NFTs on the Solana blockchain.
                            Each Punk is unique, with some featuring rare attributes tied to past Pump.fun coin culture — from meme archetypes like “Troll” to ultra-rare 1-of-1 designs commemorating iconic degen moments.
                        </p>
                    </div>
                    
                    <div className="token-section">
                        <h2 className="token-title">The $PFP Token</h2>
                        <ul className="token-list">
                            <li><strong>Symbol:</strong> $PFP</li>
                            <li><strong>Blockchain:</strong> Solana</li>
                            <li><strong>Launch Date:</strong> July 25, 2025</li>
                            <li><strong>Token Standard:</strong> SPL</li>
                            <li><strong>Launch Platform:</strong> Pump.fun</li>
                        </ul>
                        <p className="token-text">
                            <strong>Utility:</strong> Works in tandem with Pump Fun Punks through staking, community access, and potential future integrations.
                        </p>
                    </div>

                    <div className="staking-section">
                        <h2 className="staking-title">Staking with SolSuite</h2>
                        <p className="staking-text">
                            Stake your Pump Fun Punk NFTs via SolSuite — a Solana-native NFT and DeFi hub that powers the project’s staking system:
                        </p>
                        <div className="staking-process">
                            <h3 className="staking-subtitle">How to stake</h3>
                            <ul className="staking-list">
                                <li>Go to the official SolSuite Staking Page.</li>
                                <li>Connect your Solana wallet.</li>
                                <li>Deposit your Pump Fun Punk NFT.</li>
                                <li>Earn $PFP rewards from the fixed daily emission pool.</li>
                                <li>Claim rewards anytime and unstake at will.</li>
                            </ul>
                        </div>
                        <p className="staking-text">
                            The staking platform runs entirely on-chain, utilizing Solana’s speed for instant reward updates and negligible fees.
                        </p>
                    </div>

                    <div className="explain-section">
                        <h2 className="explain-title">What exactly is going on here?</h2>
                        <p className="explain-text">
                            Bitcoin introduced the concept of digital currency, but its blockchain was only built to track ownership of Bitcoin itself.
                            Pump Fun Punks are minted on Solana — a high-speed blockchain capable of running complex on-chain programs at minimal cost.
                        </p>
                        <p className="explain-text"><strong>Here’s why that matters:</strong></p>
                        <ul className="explain-list">
                            <li>The Pump Fun Punks smart contract stores ownership, metadata, and trait verification on-chain.</li>
                            <li>As compressed NFTs, they are lightweight and cost-efficient to mint and trade while still provably authentic.</li>
                            <li>The collection is directly tied to the Pump.fun ecosystem, where NFT traits mirror the humor, chaos, and history of Solana’s memecoin culture.</li>
                        </ul>
                    </div>

                    <div className="historical-section">
                        <h2 className="historical-title">Historical Significance</h2>
                        <p className="historical-text">
                            Where CryptoPunks defined early NFT culture on Ethereum, Pump Fun Punks are the emblem of the Pump.fun era —
                            a visual identity for those who were present during the most rapid, chaotic, and creative period in Solana’s memecoin history.
                        </p>
                        <p className="historical-text">
                            They launched alongside the $PFP token, establishing a dual-asset system: NFTs as identity and $PFP as the liquid
                            representation of the culture.
                        </p>
                    </div>
                    
                    <div className="get-section">
                        <h2 className="get-title">How do I get a Pump Fun Punk?</h2>
                        <ul className="get-list">
                            <li>Install a Solana wallet like Phantom or Solflare.</li>
                            <li>Add SOL from an exchange like Coinbase or Binance.</li>
                            <li>Visit Solana NFT marketplaces to browse listings.</li>
                            <li>Buy directly from current holders.</li>
                        </ul>
                        <p className="get-text">
                            As compressed NFTs, they are lightweight and cost-efficient to mint and trade while still provably authentic.
                            The collection is directly tied to the Pump.fun ecosystem, where NFT traits mirror the humor, chaos, and history of Solana’s memecoin culture.
                        </p>
                    </div>
                    
                    <div className="images-section">
                        <h2 className="images-title">Where are the images stored?</h2>
                        <p className="images-text">
                            Pump Fun Punks are compressed NFTs with metadata verified on-chain. Artwork and attribute files are stored in decentralized storage solutions to ensure persistence and censorship-resistance.
                        </p>
                        <ul className="images-list">
                            <li>Metadata verified on-chain.</li>
                            <li>Artwork &amp; attributes stored in decentralized storage (Arweave / Shadow Drive).</li>
                            <li>Compression standard ensuring minimal storage footprint with full cryptographic verification.</li>
                        </ul>
                    </div>
                    
                    <div className="spl-section">
                        <h2 className="spl-title">Are Pump Fun Punks an SPL NFT?</h2>
                        <p className="spl-text">
                            Yes. They follow the Metaplex Token Metadata standard for Solana NFTs, making them fully compatible with NFT marketplaces, DeFi integrations, and staking platforms.
                        </p>
                    </div>
                    
                    <div className="fees-section">
                        <h2 className="fees-title">Do you charge any fees for transactions?</h2>
                        <p className="fees-text">
                            When trading on Magic Eden, standard marketplace fees and minimal Solana network fees apply. The Pump Fun Punks project itself charges no additional transaction fees.
                        </p>
                    </div>
                    
                    <div className="details-section">
                        <h2 className="details-title">Details &amp; FAQ</h2>
                        <ul className="details-list">
                            <li>
                                <strong>Q: How many Pump Fun Punks exist?</strong>
                                <div className="details-a">A: 2,000 total. No additional mints are planned.</div>
                            </li>
                            <li>
                                <strong>Q: What makes a Punk rare?</strong>
                                <div className="details-a">A: Some traits, like “Troll” or “OG Degen,” link directly to famous Pump.fun coin launches, while 1-of-1 Punks have unique designs and lore.</div>
                            </li>
                            <li>
                                <strong>Q: Can I trade outside Magic Eden?</strong>
                                <div className="details-a">A: Yes. Any Solana-compatible NFT marketplace supports Pump Fun Punks.</div>
                            </li>
                            <li>
                                <strong>Q: How does staking work?</strong>
                                <div className="details-a">A: Staking via SolSuite locks your NFT to generate $PFP over time, which can be claimed and used within the Pump.fun ecosystem.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
