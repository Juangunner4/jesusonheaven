import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#a6a6a6',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#ffffff',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  margin: theme.spacing(0, 1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const Navigation: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo variant="h6">
          PumpFun Punks
        </Logo>
        <Box>
          <NavButton>
            Home
          </NavButton>
          <NavButton>
            Collection
          </NavButton>
          <NavButton>
            About
          </NavButton>
          <NavButton>
            Contact
          </NavButton>
          <NavButton variant="outlined" sx={{ 
            borderColor: '#ffffff', 
            marginLeft: 2,
            '&:hover': {
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}>
            Connect Wallet
          </NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;
