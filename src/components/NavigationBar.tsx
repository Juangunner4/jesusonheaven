import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:700px)');

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

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
        
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  position: 'absolute',
                  right: '24px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ 
                    width: 250,
                    backgroundColor: 'rgba(248, 217, 138, 0.9)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    height: '100%'
                  }}
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem disablePadding key={item}>
                        <ListItemButton component="a" href={`#${item.toLowerCase()}`}>
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <NavButton key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </NavButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
    );
  };

export default NavigationBar;
