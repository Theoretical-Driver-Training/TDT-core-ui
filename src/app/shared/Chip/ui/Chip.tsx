import { Box } from '@mui/material';
import React from 'react';

export const Chip: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      style={{
        backgroundColor: '#3b46b0',
        borderRadius: '40px',
        display: 'flex',
        alignItems: 'center',
        height: '32px',
        width: 'max-content',
        padding: '4px 12px',
        fontSize: '14px',
        color: '#fff',
        marginLeft: '8px',
      }}
    >
      {children}
    </Box>
  );
};
