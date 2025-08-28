import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Layout.css';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(248, 217, 138, 0.9)',
  backdropFilter: 'blur(15px)',
  WebkitBackdropFilter: 'blur(15px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
  color: '#333',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  width: '100%',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#000000',
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  fontFamily: 'Helvetica Now, Helvetica, Arial, sans-serif',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    color: '#ffffff',
    transform: 'translateY(-1px)',
  },
}));

const LogoContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '24px',
  transform: 'translateY(-50%)',
  zIndex: 1200,
  width: '28px',
  height: '28px',
  cursor: 'pointer',
});

export const NavigationBar: React.FC = () => {
  const navItems = ['Home', 'About', 'Tokenomics', 'Roadmap'];
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <StyledAppBar position="sticky" elevation={0} className="navigation-bar">
      <Toolbar sx={{ justifyContent: 'center', minHeight: '64px', position: 'relative' }}>
        <LogoContainer
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          {/* Light logo - always rendered */}
          <img 
            src="/lightheaven.gif"
            alt="Heaven Logo Light" 
            className="heaven-logo"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              height: '28px', 
              width: 'auto',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))',
              opacity: isLogoHovered ? 0 : 1,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none'
            }} 
          />
          {/* Dark logo - always rendered */}
          <img 
            src="/darkheaven.gif"
            alt="Heaven Logo Dark" 
            className="heaven-logo"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              height: '28px', 
              width: 'auto',
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))',
              opacity: isLogoHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none'
            }} 
          />
        </LogoContainer>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <NavButton key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavButton>
          ))}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavigationBar;
