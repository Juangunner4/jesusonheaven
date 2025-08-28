import React, { useState } from 'react';
import { Box, Typography, IconButton, Snackbar, Alert } from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import './Layout.css';

const ContractContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '16px',
  padding: '20px',
  border: '2px solid rgba(227, 242, 253, 0.6)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(227, 242, 253, 0.8)',
  },
}));

const AddressText = styled(Typography)({
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  color: '#000000',
  wordBreak: 'break-all',
  backgroundColor: '#f5f5f5',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  margin: '12px 0',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#e8e8e8',
    borderColor: '#000000',
  },
});

const CopyButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#000000',
  color: 'white',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#333333',
    transform: 'scale(1.05)',
  },
  marginLeft: '8px',
}));

interface ContractAddressProps {
  address?: string;
}

export const ContractAddress: React.FC<ContractAddressProps> = ({ 
  address = "2nmowg87Jbo55Uc3yWaeeSZ6DnDBhpoVMiQKMdKfv777" 
}) => {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <ContractContainer>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            color: '#000000',
            textAlign: 'center',
            marginBottom: '8px'
          }}
        >
          Contract Address
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#000000', 
            textAlign: 'center',
            marginBottom: '12px'
          }}
        >
          Click to copy the token contract address
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AddressText>
            {address}
          </AddressText>
          <CopyButton 
            onClick={handleCopy}
            size="small"
            title="Copy contract address"
          >
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </CopyButton>
        </Box>
      </ContractContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Contract address copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContractAddress;
